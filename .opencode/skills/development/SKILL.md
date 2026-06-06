---
name: development
description: MUST USE when building, running, linting, or publishing this ESLint/Prettier configuration package. Provides project-specific context for NPM workflows, TypeScript compilation, and code quality tools.
---

# Project Development

This skill describes the development workflow, commands, and tooling for this ESLint/Prettier configuration package. This is a published NPM library, not an application, so the workflow focuses on building, linting, and publishing the package.

## Philosophy

This is a configuration package consumed by other projects. The build must produce a clean `dist/` output with compiled JavaScript and declaration files. All changes must pass linting before commit. Host-level execution is used directly — there is no Docker configuration in this project.

## Prerequisites

- Node.js (Current recommended)
- NPM (comes with Node.js)

## Installation

```bash
npm ci
```

This installs all `devDependencies` and populates `node_modules`.

## Development Commands

All commands are run directly via NPM scripts. There is no Docker in this project.

### Building the Package

```bash
# Full build (clean + compile + declarations)
npm run build
```

The build process:
1. `rm -rf dist` — removes previous build output
2. `tsc -p declaration.tsconfig.json` — compiles TypeScript with declarations

Build output goes to `dist/` and is included in the published package.

### Linting & Formatting

```bash
# Check linting
npm run lint

# Fix linting and auto-sort JSON files
npm run lint:fix
```

ESLint uses this package's own exported config (`./dist/index.js`). The project is self-linting — it must be built first so `dist/` exists, then linting runs against the source.

Key custom rules in this project (see `eslint.config.mjs`):

- `camelCase` for variables and functions
- `camelCase` or `UPPER_CASE` for variables
- `PascalCase` for types/classes
- Leading underscore allowed for unused parameters
- Hyphens and slashes filtered out from naming convention regex

### JSON Sorting

```bash
# Sort JSON files (runs as part of lint:fix)
./sortJson.sh

# Sort with exclusions
./sortJson.sh "./custom/path/*" "./another/exclude.json"
```

Ensure the script has execution permissions:
```bash
chmod +x sortJson.sh
```

### Preparing for Publish

```bash
npm run prepublishOnly
```

This runs `npm run build` to ensure the package is compiled before publishing to NPM.

## Project Structure

```
.
├── configs/           # ESLint configuration presets
├── rules/             # Custom ESLint rules
├── settings/          # Prettier, Stylelint, and Typedoc settings
├── dist/              # Compiled output (generated, not committed)
├── index.ts           # Main entry point — exports the config function
├── helper.ts          # Utility functions used by the package
├── tsconfig.json      # Base TypeScript config
├── declaration.tsconfig.json  # TypeScript config with declarations
├── eslint.config.mjs  # Self-linting config
├── .prettierrc.js     # Prettier config
├── .editorconfig      # Editor config
├── .lintstagedrc.json # Lint-staged config for Husky
└── sortJson.sh        # JSON sorting script
```

## Key Files

### `index.ts`

The main entry point. Exports the `config()` function that consumers call. This function accepts options like `strict`, `tsconfigRootDir`, `typescript`, and optional configs (`jest`, `react`, `markdown`, etc.).

### `helper.ts`

Utility functions and constants used by the package:
- `tsFileExts` — TypeScript file extensions for ESLint config targeting
- `suffixPackageName` — Package name prefix for ESLint config names

### `configs/`

Contains ESLint configuration presets for different setups:
- JavaScript/TypeScript base configs
- Optional configs for React, Jest, Markdown, JSON, YAML, etc.

### `settings/`

Contains shared settings files:
- `prettier.js` — Prettier formatting settings
- `stylelint.js` — Stylelint SCSS settings
- `typedoc.js` — TypeDoc documentation settings

### `rules/`

Contains custom ESLint rule definitions.

## Build Configuration

### TypeScript Config (`tsconfig.json`)

- `target`: ESNext
- `module`: ESNext
- `moduleResolution`: Node
- `strict`: true + `strictNullChecks`
- `esModuleInterop`: true
- `allowSyntheticDefaultImports`: true
- `outDir`: `./dist`
- `declaration`: false (base config)

### Declaration Config (`declaration.tsconfig.json`)

Extends `tsconfig.json` with:
- `declaration`: true
- `declarationMap`: true
- `emitDeclarationOnly`: false
- `noEmit`: false

### Package Entry Points

- `main`: `./dist/index.js`
- `files`: `dist/**/*`, `.editorconfig`, `sortJson.sh`
- `type`: `module` (ES modules)

## Git Hooks (Husky)

Pre-commit runs `lint-staged` with `.lintstagedrc.json`:

```json
{
  "*.{js,cjs,mjs,ts,json,json5,jsonc,yml,yaml,md}": ["prettier --write"]
}
```

All staged JS/TS/JSON/YAML/MD files are auto-formatted with Prettier on commit.

## Troubleshooting

### "Cannot find module './dist/index.js'" when linting

The ESLint config imports from `./dist/index.js`. You must build the package first:

```bash
npm run build
npm run lint
```

### Build fails with TypeScript errors

Check `tsconfig.json` and `declaration.tsconfig.json` for conflicting settings. The declaration config extends the base config, so base settings should be compatible.

### Package-lock.json out of sync

```bash
rm package-lock.json
npm install
```

### Linting fails after editing JSON files

```bash
npm run lint:fix
```

Or sort specific files:
```bash
./sortJson.sh
```

### Prettier formatting not applied on commit

Ensure Husky is installed:
```bash
npm run prepare
```

This initializes Husky hooks.

## Publishing

This package is published to NPM. Before publishing:

1. Bump the version in `package.json`
2. Run `npm run build` to ensure `dist/` is fresh
3. Run `npm run lint` to verify code quality
4. Run `npm run prepublishOnly` (which runs `npm run build`)
5. Publish with `npm publish`

The `files` field in `package.json` controls what gets included in the published package:
- `dist/**/*` — compiled output
- `.editorconfig` — editor config for consumers
- `sortJson.sh` — JSON sorting utility
