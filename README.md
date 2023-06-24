# ESLint configuration

![GitHub](https://img.shields.io/github/license/stijnklomp/eslint-configuration?style=flat)

An ESLint and Prettier configuration for linting and formatting code proje

## Installation

You can install the package via npm by running the following command:

```bash
npm install stijnklomp-eslint-config --save-dev
```

### Dependencies

##### Dependencies

- `eslint-config-airbnb-base` (version "^15.0.0"): This dependency provides the base ESLint configuration following the Airbnb style guide. It is used for linting JavaScript code.

##### Development Dependencies

- `@babel/eslint-parser` (version "^7.21.8"): This development dependency is a parser for ESLint that allows linting of code that uses modern JavaScript syntax.
- `eslint-config-prettier` (version "^8.8.0"): This development dependency disables ESLint rules that conflict with Prettier, a code formatter, to ensure consistent formatting.

##### Peer Dependencies

Peer dependencies are packages that the project expects to be provided by the consumer (the user or another package). They are not installed automatically and must be manually installed.

- `@types/jest` (version "^29.5.1"): This peer dependency provides TypeScript type definitions for the Jest testing framework.
- `eslint` (version "^8.40.0"): This peer dependency installs ESLint, a popular JavaScript linter.
- `eslint-config-airbnb` (version "^19.0.4"): This peer dependency provides additional ESLint configurations following the Airbnb style guide.
- `eslint-config-airbnb-typescript` (version "^17.0.0"): This peer dependency provides ESLint configurations for TypeScript projects, following the Airbnb style guide.
- `eslint-plugin-import` (version "^2.27.5"): This peer dependency provides ESLint rules for linting import/export statements.
- `eslint-plugin-jest` (version "^27.2.1"): This peer dependency provides ESLint rules specific to the Jest testing framework.
- `eslint-plugin-jsx` (version "^0.1.0"): This peer dependency provides ESLint rules for linting JSX syntax.
- `eslint-plugin-jsx-a11y` (version "^6.7.1"): This peer dependency provides ESLint rules to improve accessibility in JSX.
- `eslint-plugin-prettier` (version "^4.2.1"): This peer dependency allows integrating Prettier with ESLint to format code automatically.
- `eslint-plugin-react` (version "^7.32.2"): This peer dependency provides ESLint rules for linting React code.
- `eslint-plugin-react-hooks` (version "^4.6.0"): This peer dependency provides ESLint rules for linting React Hooks.
- `typescript` (version "^5.0.4"): This peer dependency installs TypeScript, a strongly-typed superset of JavaScript.

##### Peer Dependencies Meta

The following peer dependencies are optional:

- `eslint-config-airbnb-typescript`: This peer dependency for ESLint configurations specific to TypeScript projects is marked as optional, meaning it's not mandatory but recommended for projects using TypeScript.
- `eslint-plugin-jest`: This peer dependency for ESLint rules specific to the Jest testing framework is marked as optional.
- `eslint-plugin-jsx-a11y`: This peer dependency for ESLint rules to improve accessibility in JSX is marked as optional.
- `eslint-plugin-react`: This peer dependency for ESLint rules specific to React is marked as optional.
- `eslint-plugin-react-hooks`: This peer dependency for ESLint rules specific to React Hooks is marked as optional.
- `typescript`: This peer dependency for TypeScript is marked as optional.

These optional peer dependencies are not required for the project to function but are recommended for better linting and development experience, depending on the

You can install these dependencies using npm. Make sure to install them as development dependencies by adding the `--save-dev` flag to the installation command. For example:

```bash
npm install eslint-config-airbnb-base@^15.0.0 @babel/eslint-parser@^7.21.8 eslint-config-prettier@^8.8.0 @types/jest@^29.5.1 eslint@^8.40.0 eslint-config-airbnb@^19.0.4 eslint-config-airbnb-typescript@^17.0.0 eslint-plugin-import@^2.27.5 eslint-plugin-jest@^27.2.1 eslint-plugin-jsx@^0.1.0 eslint-plugin-jsx-a11y@^6.7.1 eslint-plugin-prettier@^4.2.1 eslint-plugin-react@^7.32.2 eslint-plugin-react-hooks@^4.6.0 typescript@^5.0.4 --save-dev
```

Ensure that you have the appropriate versions of the dependencies compatible with this package by referring to the `"peerDependencies"` section in the `package.json` file.

## Usage

Find example configuration files at the bottom for using everything that is included in this package. (`ESLint`, `Prettier`, `Typedoc`, `Jest` and `editor config`)

##### ESLint

To use ESLint in your project, you need to create an ESLint configuration file (`.eslintrc.js`) and extend the ESLint config (`@stijnklomp/eslint-config/eslint`).

`.eslintrc.js`

```javascript
module.exports = {
  extends: ["@stijnklomp/eslint-config/eslint"],
};
```

##### Prettier

To use Prettier in your project, you need to create an Prettier configuration file (`.prettierrc.js`) and extend the Prettier config (`@stijnklomp/eslint-config/prettier`).

`.prettierrc.js`

```javascript
module.exports = require("@stijnklomp/eslint-config/prettier");
```

You will also need to add 'prettier' as a plugin in your ESLint configuration file.

`.eslintrc.js`

```javascript
module.exports = {
  plugins: ["prettier"],
};
```

##### Typescript

To use Typescript in your project, you need to create an Typescript configuration file (`tsconfig.json`) and extend the Typescript config (`@stijnklomp/eslint-config/tsconfig.base`).

`tsconfig.json`

```json
{
  "extends": "@stijnklomp/eslint-config/tsconfig.base",
  "include": ["src", "global.d.ts"],
  "exclude": ["node_modules", "build"]
}
```

You will also need to add '@typescript-eslint' as a plugin and set `@typescript-eslint/parser` as your parser in your ESLint configuration file.

`.eslintrc.js`

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
```

##### Jest

The package automatically comes with Jest specific linting rules.

##### Typedoc

To use Typedoc in your project, you need to create an Typedoc configuration file (`typedoc.json`) and extend the Typedoc config (`@stijnklomp/eslint-config/typedoc`).

`typedoc.json`

```json
{
  "extends": ["@stijnklomp/eslint-config/typedoc"]
}
```

##### Example configuration files

`.eslintrc.js`

```javascript
module.exports = {
  root: true,
  extends: ["@stijnklomp/eslint-config/eslint"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    srouceType: "module",
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
```

`.prettierrc.js`

```javascript
module.exports = require("@stijnklomp/eslint-config/prettier");
```

`tsconfig.json`

```json
{
  "extends": "@stijnklomp/eslint-config/tsconfig.base",
  "include": ["src", "global.d.ts"],
  "exclude": ["node_modules", "build"]
}
```

`jest.config.js`

```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

`typedoc.json`

```json
{
  "extends": ["@stijnklomp/eslint-config/typedoc"]
}
```

`.editorconfig`

```
root = true

# Use tabs that are equivalent to 4 spaces
[*]
charset = utf-8
indent_style = tab
tab_width = 4

# Ensure that all files have an LF line ending
[*]
end_of_line = lf

# Trim trailing whitespace in all files
[*]
trim_trailing_whitespace = true

# Disable insertion of a final newline in all files
[*]
insert_final_newline = false
```

## Configuration Details

This package provides a default ESLint and Prettier configuration. The configuration includes rules and settings for code style, formatting, and best practices.

## ESLint Configuration

This ESLint configuration:

- Extends the following configurations:

  - `eslint:recommended`: Recommended ESLint rules.
  - `plugin:@typescript-eslint/eslint-recommended`: ESLint rules for TypeScript (recommended subset).
  - `plugin:@typescript-eslint/recommended`: Additional recommended ESLint rules for TypeScript.

- Ignores specific file patterns from linting:

  - `node_modules/**`: Ignores files in the `node_modules` directory.
  - `doc/**`: Ignores files in the `doc` directory.
  - `build/**`: Ignores files in the `build` directory.

- Defines various rules, including:

  - `"prefer-arrow-callback"`: Enforces the use of arrow functions instead of traditional function expressions.
  - `"import/extensions"`: Disables the enforcement of file extensions in import statements.
  - `"import/prefer-default-export"`: Disables the requirement of using default exports.
  - `"camelcase"`: Enforces camelCase naming convention for properties while allowing the ignoring of - destructuring.
  - `"no-unused-vars"`: Raises an error for unused variables, while ignoring rest siblings.
  - `"no-mixed-spaces-and-tabs"`: Disables the rule that disallows mixing tabs and spaces.
  - `"padding-line-between-statements"`: Enforces blank lines between specific types of statements.
  - `"no-console"`: Raises a warning when console is used except for `warn` and `error`.
  - `"no-restricted-syntax"`: Raises an error for restricted syntax (functionexpression and functiondeclaration).
  - `"no-class-assign"`: Raises an error when assigning a value to a class.
  - `"no-confusing-arrow"`: Disables the rule that disallows confusing arrow function syntax.
  - `"no-dupe-class-members"`: Raises an error for duplicate class members.
  - `"no-duplicate-imports"`: Raises an error for duplicate imports (excluding exports).
  - `"no-this-before-super"`: Raises an error when using `this` before `super` in a constructor.
  - `"no-var"`: Raises an error when using `var` instead of `let` or `const`.
  - `"prefer-const"`: Recommends using `const` for variables that are not reassigned.
  - `"prettier/prettier"`: Integrates Prettier with specific configuration options.

- Overrides configurations for specific file patterns:

  - TypeScript files `(**/*.{ts,tsx})`:

    - Extends the following configurations:

      - `"eslint:recommended"`: Recommended ESLint rules.
      - `"plugin:@typescript-eslint/recommended"`: Additional recommended ESLint rules for TypeScript.
      - `"plugin:@typescript-eslint/recommended-requiring-type-checking"`: ESLint rules for TypeScript that require type checking.

    - Specifies the `parserOptions`:

      - `project: "./tsconfig.json"`: Specifies the path to the `tsconfig.json` file for TypeScript configuration.

    - Specifies specific rules and their configurations:
      - `"@typescript-eslint/no-inferrable-types"`: Turns off the rule that raises errors for unnecessary type declarations in TypeScript.
      - `"no-mixed-spaces-and-tabs"`: Turns off the rule that disallows mixing spaces and tabs.
      - `"@typescript-eslint/restrict-template-expressions"`: Turns off the rule that enforces stricter usage of template expressions in TypeScript.
      - `"@typescript-eslint/no-unused-vars"`: Raises an error for unused variables in TypeScript, while ignoring rest siblings.
      - `"prefer-arrow-callback"`: Enforces the use of arrow functions instead of traditional function expressions.
      - `"@typescript-eslint/no-explicit-any"`: Raises a warning for explicit use of the any type in TypeScript.

  - Test files `(test/**)`:

    - Specifies the plugins used:

      - `plugins: ["jest"]`: Includes the `jest` plugin for ESLint.

    - Extends the following configuration:

      - `extends: ["plugin:jest/recommended"]`: Extends the recommended ESLint rules for Jest.

    - Specifies specific rules and their configurations:
      - `"jest/prefer-expect-assertions": "off": Turns off the rule that suggests using expect.assertions() in tests.
      - `"jest/no-disabled-tests"`: Raises a warning for disabled tests.
      - `"jest/no-focused-tests"`: Raises a warning for focused tests.
      - `"jest/no-identical-title"`: Raises a warning for tests with identical titles.
      - `"jest/prefer-to-have-length"`: Raises a warning when it's preferred to use `toHaveLength()` matcher.
      - `"jest/valid-expect"`: Raises a warning for invalid `expect` statements.

## Prettier Configuration

The Prettier configuration includes the following settings:

```javascript
{
	"tabWidth": 4,
		"useTabs": true,
		"semi": false,
		"singleQuote": false,
		"jsxSingleQuote": false,
		"trailingComma": "none",
		"bracketSpacing": true,
		"bracketSameLine": true,
		"arrowParens": "always",
		"insertPragma": false,
		"htmlWhitespaceSensitivity": "css"
}
```

These settings define the formatting rules for your code, such as indentation, semicolons, quotes, commas, and more.