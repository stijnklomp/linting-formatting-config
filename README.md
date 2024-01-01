# ESLint configuration

![GitHub](https://img.shields.io/github/license/stijnklomp/linting-formatting-config?style=flat)

An ESLint and Prettier configuration for linting and formatting code projects.

## Installation

You can install the package via npm by running the following command:

```bash
npm install stijnklomp-linting-formatting-config --save-dev
```

### Dependencies

##### Peer Dependencies

Peer dependencies are packages that the project expects to be provided by the consumer (the user or another package). They are not installed automatically and must be manually installed.

-   `@types/jest`: ^29.5.11
-   `eslint`: ^8.56.0
-   `eslint-config-airbnb`: ^19.0.4
-   `eslint-config-airbnb-typescript`: ^17.1.0
-   `eslint-plugin-import`: ^2.29.1
-   `eslint-plugin-jest`: ^27.6.0
-   `eslint-plugin-jsx-a11y`: ^6.8.0
-   `eslint-plugin-prettier`: ^5.1.2
-   `eslint-plugin-react`: ^7.33.2
-   `eslint-plugin-react-hooks`: ^4.6.0
-   `typescript`: ^5.3.3

Use the following to install all peer dependencies not marked as optional:

```bash
npx install-peerdeps --dev @stijnklomp/linting-formatting-config --only-peers
```

##### Peer Dependencies Meta

The following peer dependencies are optional:

-   `eslint-config-airbnb-typescript`
-   `eslint-plugin-jest`
-   `eslint-plugin-jsx-a11y`
-   `eslint-plugin-react`
-   `eslint-plugin-react-hooks`
-   `typescript`

These optional peer dependencies are not required for the project to function but are recommended for better linting and development experience, depending on the tools that are used on the project.

Ensure that you have the appropriate versions of the dependencies compatible with this package by referring to the `"peerDependencies"` section in the `package.json` file.

## Usage

Find example configuration files at the bottom for using everything that is included in this package. (`ESLint`, `Stylelint`, `Prettier`, `Typedoc`, `Jest` and `editor config`)

##### ESLint

To use ESLint in your project, you need to create an ESLint configuration file (`.eslintrc.js`) and extend the ESLint config (`@stijnklomp/linting-formatting-config/eslintRules.js`).

Include the rules that you desire by extending any of the following files:

`.eslintrc.js`

```javascript
module.exports = {
	extends: [
		"./node_modules/stijnklomp-linting-formatting-config/eslintRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/jestRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/reactRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/typescript/typescriptRules.js",
	],
};
```

##### Stylelint

To use Stylelint in your project, you need to create a Stylelint configuration file (`.stylelintrc.js`) and extend the Stylelint config (`@stijnklomp/linting-formatting-config/stylelint.js`).

`.stylelintrc.js`

```javascript
module.exports = {
	extends: [
		"./node_modules/stijnklomp-linting-formatting-config/stylelint/stylelint.js",
		"./node_modules/stijnklomp-linting-formatting-config/stylelint/stylelintRules.js",
	],
};
```

##### Prettier

To use Prettier in your project, you need to create a Prettier configuration file (`.prettierrc.js`) and extend the Prettier config (`stijnklomp-linting-formatting-config/prettier/prettier`).

`.prettierrc.js`

```javascript
module.exports = require("./node_modules/stijnklomp-linting-formatting-config/prettier/prettier");
```

You will also need to add 'prettier' as a plugin in your ESLint configuration file.

You can optionally add linting rules for Prettier by extending the Prettier rules file (`stijnklomp-linting-formatting-config/prettier/prettierRules.js`).

`.eslintrc.js`

```javascript
module.exports = {
	plugins: ["prettier"],
	settings: {
		"prettier/prettier": require("./node_modules/stijnklomp-linting-formatting-config/prettier/prettierRules.js"),
	},
};
```

##### Typescript

To use Typescript in your project, you need to create a Typescript configuration file (`tsconfig.json`) and extend the Typescript config (`stijnklomp-linting-formatting-config/typescript/tsconfig.base`).

`tsconfig.json`

```json
{
	"extends": "./node_modules/stijnklomp-linting-formatting-config/typescript/tsconfig.base"
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

##### Typedoc

To use Typedoc in your project, you need to create a Typedoc configuration file (`typedoc.json`) and extend the Typedoc config (`@stijnklomp-linting-formatting-config/typedoc`).

`typedoc.json`

```json
{
	"extends": ["./node_modules/stijnklomp-linting-formatting-config/typedoc"]
}
```

##### Example configuration files

`.eslintrc.js`

```javascript
module.exports = {
	root: true,
	extends: [
		"./node_modules/stijnklomp-linting-formatting-config/eslintRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/jestRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/typescript/typescriptRules.js",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
	},
	settings: {
		"prettier/prettier": require("./node_modules/stijnklomp-linting-formatting-config/prettier/prettierRules.js"),
	},
};
```

`tsconfig.json`

```json
{
	"compileOnSave": false,
	"compilerOptions": {
		"allowJs": true,
		"allowSyntheticDefaultImports": true,
		"baseUrl": ".",
		"declaration": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"incremental": true,
		"inlineSourceMap": false,
		"isolatedModules": true,
		"jsx": "preserve",
		"lib": ["dom", "dom.iterable"],
		"listEmittedFiles": false,
		"listFiles": false,
		"module": "ES2022",
		"moduleResolution": "node",
		"noEmit": true,
		"noFallthroughCasesInSwitch": true,
		"pretty": true,
		"resolveJsonModule": true,
		"rootDir": ".",
		"skipLibCheck": true,
		"strict": true,
		"target": "es5",
		"traceResolution": false,
		"types": ["node", "jest", "@testing-library/jest-dom"]
	},
	"exclude": ["node_modules"],
	"include": ["**/*.ts", "**/*.tsx"]
}
```

`jest.config.json`

```json
{
	"testEnvironment": "jsdom",
	"rootDir": ".",
	"roots": ["<rootDir>/tests/unit"],
	"preset": "ts-jest/presets/default-esm",
	"moduleDirectories": ["node_modules"],
	"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$",
	"moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
	"modulePaths": ["<rootDir>"],
	"coverageDirectory": "tests/unit/coverage",
	"transform": {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				"useESM": true
			}
		]
	}
}
```

`typedoc.json`

```json
{
	"extends": ["./node_modules/stijnklomp-linting-formatting-config/typedoc"],
	"entryPoints": ["./app", "./features"]
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

# 2 spaces for YAML
[*.yml]
indent_style = space
tab_width = 2

[*.yaml]
indent_style = space
tab_width = 2

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

This package provides a default ESLint and Prettier configuration. The configurations include rules and settings for code style, formatting, and best practices.

## ESLint Configuration

This ESLint configuration:

-   Extends the following configurations:

    -   `eslint:recommended`: Recommended ESLint rules.
    -   `plugin:@typescript-eslint/eslint-recommended`: ESLint rules for TypeScript (recommended subset).
    -   `plugin:@typescript-eslint/recommended`: Additional recommended ESLint rules for TypeScript.

-   Ignores specific file patterns from linting:

    -   `node_modules/**`
    -   `doc/**`
    -   `build/**`

-   Overrides configurations for specific file patterns:

    -   TypeScript files `(**/*.{ts,tsx})`:

        -   Extends the following configurations:

            -   `"eslint:recommended"`: Recommended ESLint rules.
            -   `"plugin:@typescript-eslint/recommended"`: Additional recommended ESLint rules for TypeScript.
            -   `"plugin:@typescript-eslint/recommended-requiring-type-checking"`: ESLint rules for TypeScript that require type checking.

    -   Test files `(test/**)`:

        -   Extends the following configuration:

            -   `extends: ["plugin:jest/recommended"]`: Extends the recommended ESLint rules for Jest.

These settings define the formatting rules for your code, such as indentation, semicolons, quotes, commas, and more.
