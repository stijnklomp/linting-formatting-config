---
name: dependency-management
description: MUST USE when upgrading dependencies in this ESLint/Prettier configuration package. Covers NPM dependency update workflows, peer dependency management, and post-upgrade verification for linting/formatting plugins.
---

# Dependency Management & Upgrades

This skill describes how to safely update project dependencies for this ESLint/Prettier configuration package. Since this is a published NPM package with peer dependencies, upgrades must be handled carefully to avoid breaking downstream consumers.

## Philosophy

Always verify the build and linting still pass after dependency changes. This package is consumed by other projects, so breaking changes in peer dependencies or exported configs must be caught before publishing.

## Pre-Upgrade Safety

Before touching dependencies, ensure you can revert:

```bash
# Check for uncommitted changes
git status

# If dirty, commit or stash first
git add -A && git commit -m "chore: pre-upgrade checkpoint"
```

The `package-lock.json` file is your revert point. If the upgrade breaks things irreparably, restore it:

```bash
git checkout package-lock.json
rm -rf node_modules
npm ci
```

## Upgrade Workflow

### Step 1: Update Dependencies

**Option A: Update all dependencies at once**

```bash
# Updates all dependencies to the latest version within their
# SEMVER range in package.json, then regenerates package-lock.json
npm update

# To update across major versions (ignores SEMVER ranges)
npx npm-check-updates -u
npm install
```

`npm update` respects the version ranges in `package.json`. For example, if `package.json` has `"eslint": "^9.39.2"`, `npm update` will update to the latest `9.x.x` but NOT to `10.0.0`.

To upgrade across major version boundaries, use `npm-check-updates`.

> **Note on `min-release-age`**: `.npmrc` sets `min-release-age = 259200` (3 days). This means `npm update` will not install releases newer than 3 days old as a security precaution. If the user needs the absolute latest versions regardless of age, they must manually lower or remove this value in `.npmrc` themselves. The agentic AI must not modify this setting.

**Option B: Update a specific package**

```bash
# Update one package to the latest version within its SEMVER range
npm update <package-name>

# Example: update ESLint within its current major version
npm update eslint

# To install a specific version (for pinning or downgrading)
npm install <package-name>@<version>

# Example: pin a specific ESLint version
npm install eslint@9.39.2
```

**Option C: Update peer dependencies**

Peer dependencies must be updated in both `devDependencies` and `peerDependencies`:

```bash
npm install <package-name>@<version>
```

Then manually update the corresponding `peerDependencies` range in `package.json`.

**Option D: Use Docker for reproducible NPM version**

This project includes a `Dockerfile` that pins the Node.js and NPM versions. Use this to ensure dependency updates run with a known, consistent NPM version:

```bash
# Build the dependency-management image
docker build -t linting-deps .

# Update all dependencies inside the container
# Mount the project directory so changes are written back to the host
docker run --rm -v $(pwd):/app linting-deps npm update

# Update a specific package
docker run --rm -v $(pwd):/app linting-deps npm update <package-name>

# Install a specific version
docker run --rm -v $(pwd):/app linting-deps npm install <package-name>@<version>
```

After running updates via Docker, continue with the verification steps below (build, lint:fix, lint).

### Major Version Upgrades — Always Check Official Migration Docs

When upgrading across a **major version boundary** (e.g., `eslint` 9 → 10, `typescript-eslint` 8 → 9), the official migration guide is the primary source of truth for what needs to change in the project.

**Before running any upgrade command**, search for the package's official migration documentation:

1. **Check the package's official docs** — Look for a "Migration" or "Upgrading" page in the project's documentation site (e.g., `typescript-eslint.io`, `eslint.org`, `prettier.io`).
2. **Check the GitHub releases page** — Major version releases often include a detailed migration guide or breaking changes section.
3. **Check the changelog** — Look for `BREAKING CHANGES` or `Migration` headings.

**What to do with the migration guide:**

- Read the migration guide **before** making any changes.
- Follow the guide's instructions exactly — they often include required config changes, renamed rules, removed APIs, or new peer dependencies.
- The migration guide dictates what needs to be updated in the project (e.g., renaming rules in `configs/`, updating API calls in `index.ts`, changing peer dependency ranges, etc.).
- Do **not** guess what needs to change — always follow the official migration guide.

**Example workflow for a major version upgrade:**

```bash
# 1. Read the migration guide for the package
# 2. Follow the guide's instructions to update the project code
# 3. Update the package version
npm install <package-name>@<new-major-version>

# 4. Update peerDependencies if applicable
# 5. Continue with the verification steps below
```

### Step 2: Reinstall from Lockfile

After updating the lockfile, reinstall to ensure `node_modules` matches:

```bash
npm ci
```

### Step 3: Build the Package

After any dependency change, rebuild the package to verify the TypeScript compilation still works:

```bash
npm run build
```

This runs `tsc -p declaration.tsconfig.json` and outputs to `dist/`.

### Step 4: Fix Code Formatting

Dependency upgrades can shift formatting rules (especially Prettier and ESLint plugins). Auto-fix everything:

```bash
npm run lint:fix
```

This sorts JSON files and runs ESLint with `--fix`.

### Step 5: Verify Linting Passes

Run the lint check to ensure no new violations were introduced:

```bash
npm run lint
```

If all three pass (build, lint:fix, lint), the upgrade is safe to commit.

## Common Post-Upgrade Failures & Fixes

### TypeScript Compilation Errors

**Symptom**: `tsc` reports type errors after upgrading TypeScript or ESLint/TypeScript-ESLint packages.

**Causes & Fixes**:

| Upgrade | Common Breakage | Fix |
|---------|----------------|-----|
| TypeScript major | Stricter checks | Fix type errors surfaced by new strictness |
| typescript-eslint major | Config API changes | Update `config()` function and exported configs in `index.ts` |
| ESLint major | Rule API changes | Update custom rules in `rules/` and `configs/` |
| Prettier major | Formatting changes | Run `npm run lint:fix` to reformat |
| ESLint plugin major | New rules or renamed rules | Update rule configurations in `configs/` |

**General approach**:

```bash
# See all type errors at once
npx tsc --noEmit

# Fix the most common ones first
npm run lint:fix
```

### Peer Dependency Mismatch

**Symptom**: Consumers report peer dependency warnings or errors after installing this package.

**Checklist**:
1. Check `peerDependencies` in `package.json` matches the versions you tested with
2. Ensure `peerDependenciesMeta` correctly marks optional peers
3. Run `npm run build` and `npm run lint` to verify the package works with the declared peer versions

### Exported Config Breaks

**Symptom**: After upgrading ESLint/TypeScript-ESLint, downstream projects report config errors.

**Fix**: Test the exported configs locally by importing them from `dist/`:

```bash
npm run build
node -e "import('./dist/index.js').then(m => console.log('Config loads OK'))"
```

### Lockfile Conflicts

**Symptom**: `npm ci` fails after merging branches.

**Fix**:

```bash
# Regenerate from package.json
rm package-lock.json
npm install
npm run lint:fix
npm run build
npm run lint
```

## Breaking Change Triage Strategy

When `npm run build` or `npm run lint` fails after a version bump, use this priority order:

1. **Read the changelogs** of the upgraded packages (typescript-eslint, ESLint, Prettier are the most likely culprits)
2. **Fix TypeScript errors first** — they usually point to API changes in exported configs
3. **Fix lint errors second** — usually just formatting or new rule violations
4. **If stuck**, bisect by reverting `package-lock.json` and upgrading packages one at a time

## Committing the Upgrade

Once `npm run build` and `npm run lint` pass:

```bash
git add -A
git commit -m "chore(deps): update dependencies"
```

Include in the commit:
- `package.json` (updated version ranges)
- `package-lock.json` (the new resolved lockfile)
- Any code changes required to fix breaking changes

## Important Rules

- **Never commit a broken state** — always run `npm run build` and `npm run lint` before committing
- **Always update peer dependencies** in `package.json` when devDependency versions change
- **Always run `lint:fix`** after upgrading formatting-related packages (Prettier, ESLint, etc.)
- **When upgrading typescript-eslint**, verify the exported configs in `dist/index.js` still work correctly
- **When in doubt**, restore `package-lock.json` from git and try a more targeted upgrade
- **Never modify `.npmrc`'s `min-release-age`** — this is a security boundary. If the user needs dependencies newer than the configured age limit, the user must manually update this value themselves. The agentic AI is not allowed to change it.
