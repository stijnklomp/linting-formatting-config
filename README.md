# ESLint configuration

![GitHub](https://img.shields.io/github/license/stijnklomp/eslint-configuration?style=flat)

An ESLint and Prettier configuration for linting and formatting code projects.

## Installation

You can install the package via npm by running the following command:

```bash
npm install @stijnklomp/eslint-config --save-dev
```

### Dependencies

To use the package, you need to have the following dependencies installed in your project:
- `eslint`: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript code.
- `eslint-config-airbnb`: An ESLint configuration that enforces JavaScript best practices and coding conventions.
- `eslint-config-airbnb-base`: A subset of the `eslint-config-airbnb` configuration that focuses on JavaScript best practices and coding conventions without React-specific rules.
- `eslint-config-airbnb-typescript`: An extension of the `eslint-config-airbnb` configuration for TypeScript projects.
- `eslint-plugin-import`: ESLint plugin that provides linting rules for import/export syntax and usage.
- `eslint-plugin-jest`: ESLint plugin for Jest-specific linting rules.
- `eslint-plugin-jsx-a11y`: ESLint plugin that provides accessibility linting rules for JSX.
- `eslint-plugin-prettier`: ESLint plugin that integrates Prettier code formatting rules into ESLint.
- `eslint-plugin-react`: ESLint plugin that provides React-specific linting rules.
- `eslint-plugin-react-hooks`: ESLint plugin that provides linting rules for React Hooks.
- `typescript`: A typed superset of JavaScript that compiles to plain JavaScript.
- `@typescript-eslint/eslint-plugin`: ESLint plugin that provides linting rules for TypeScript code.
- `@typescript-eslint/parser`: An ESLint parser that allows ESLint to understand TypeScript syntax.
- `babel-eslint`: A parser that allows ESLint to lint all valid Babel code.
- `eslint-config-prettier`: ESLint configuration that disables ESLint rules that conflict with Prettier.

You can install these dependencies using npm. Make sure to install them as development dependencies by adding the `--save-dev` flag to the installation command. For example:
```bash
npm install eslint eslint-config-airbnb eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint-config-prettier --save-dev
```

Ensure that you have the appropriate versions of the dependencies compatible with this package by referring to the `"peerDependencies"` section in the `package.json` file.

## Usage

To use this ESLint and Prettier configuration in your project, you need to create an ESLint configuration file (`eslint.config.js`) and destrcuture the @stijnklomp/eslint-config configuration.
*It only works with the new `eslint.config.js` file*

`eslint.json.js`

```javascript
import { eslintConfig } from "@stijnklomp/eslint-config"

export default [{
	...eslintConfig,
	rules: {
		// Additional rules
	}
}]
```

You can also extend the configuration for specific environments or languages. For example, if you are using TypeScript, you can extend the `@stijnklomp/eslint-config/typescript` configuration:

`.eslintrc.js`

```javascript
module.exports = {
extends: ['@stijnklomp/eslint-config', '@stijnklomp/eslint-config/typescript'],
		 rules: {
			 // Additional rules
		 }
}
```

## Configuration Details

This package provides a default ESLint and Prettier configuration. The configuration includes rules and settings for code style, formatting, and best practices.

## ESLint Configuration

The ESLint configuration includes the following settings:

- Extends `eslint-config-airbnb-base`: A popular ESLint configuration that enforces JavaScript best practices and coding conventions.
- Disables the following `eslint-config-airbnb-base` rules:
	- `import/extensions`
	- `import/prefer-default-export`
- Adds custom rules for:
	- `camelcase`: Enforces camelcase naming convention with options to enforce it for properties and ignore destructuring.
	- `no-unused-vars`: Custom configuration to ignore unused variables in rest siblings.
	- `padding-line-between-statements`: Enforces blank lines between statements and blocks.
	- `no-restricted-syntax`: Restricts the use of function expressions and function declarations.
- Adds Jest-specific rules from eslint-plugin-jest:
	- `jest/no-disabled-tests`
	- `jest/no-focused-tests`
	- `jest/no-identical-title`
	- `jest/prefer-to-have-length`
	- `jest/valid-expect`
- Integrates with Prettier using `eslint-plugin-prettier` and `eslint-config-prettier` to enforce consistent code formatting.

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