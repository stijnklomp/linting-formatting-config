# ESLint configuration

<p align="center">An <a href="https://eslint.org/" target="_blank">ESLint</a> and <a href="https://prettier.io/" target="_blank">Prettier</a> configuration for linting and formatting code projects. The configurations include rules and settings for code style, formatting, and best practices.</p>
<p align="center">This project uses <a href="https://typescript-eslint.io/">typescript-eslint</a> to easily implement multiple configurations with <a href="https://www.typescriptlang.org/">Typescript</a> support.</p>
<p align="center">
<a href="https://www.npmjs.com/package/stijnklomp-linting-formatting-config" target="_blank"><img src="https://img.shields.io/npm/v/stijnklomp-linting-formatting-config" alt="NPM Version" /></a>
<img src="https://img.shields.io/github/license/stijnklomp/nestjs-template?style=flat" alt="Package License" />
</p>

## Installation

You can install the package via npm by running the following command:

```bash
npm install stijnklomp-linting-formatting-config --save-dev
```

Use the following to install all peer dependencies not marked as optional:

```bash
npx install-peerdeps --dev stijnklomp-linting-formatting-config --only-peers
```

TODO:

-   json-sort-cli
-   Stylelint can be used directly by calling the file. It does not use the flat config
-   Explain the different optional configs that can be used

### Dependencies

This package uses peer dependencies. These are packages that the project expects to be provided by the user. They are not installed automatically and must be manually installed.

Check the `peerDependencies` section of the `package.json` file to ensure you have compatible versions of the required dependencies.

##### Required dependencies

-   `@typescript-eslint/parser`
-   `eslint`
-   `eslint-config-prettier`
-   `eslint-plugin-jsonc`
-   `eslint-plugin-package-json`
-   `eslint-plugin-prettier`
-   `eslint-plugin-yml`
-   `prettier`
-   `prettier-plugin-packagejson`
-   `typescript-eslint`

##### Optional dependencies

-   `@eslint/js` Javascript
-   `eslint-plugin-jest` Jest
-   `eslint-plugin-markdown` Markdown
-   `eslint-plugin-react` React
-   `eslint-plugin-react-hooks` React
-   `stylelint` CSS/SASS
-   `stylelint-config-prettier-scss` SASS
-   `stylelint-config-standard-scss` SASS
-   `typescript` Typescript

## Usage

Find usage examples below for everything that requires its own configuration file(s). (`ESLint`, `Prettier`, `Typedoc`, `editor config` and `Stylelint`)

##### ESLint

To use ESLint in your project, you need to create an ESLint configuration file (`eslint.config.(m)js`) and use the ESLint config. (`stijnklomp-linting-formatting-config/index.js`)

`eslint.config.(m)js`

```javascript
import tseslint from "typescript-eslint"
import config from "stijnklomp-linting-formatting-config/index.js"

export default tseslint.config(
	...config({
		strict: true,
		tsconfigRootDir: ".",
		typescript: true,
	}),
)
```

##### Prettier

To use Prettier in your project, you need to create a Prettier configuration file (`.prettierrc.(m)js`) and extend the Prettier config (`stijnklomp-linting-formatting-config/prettier/prettier`).

`.prettierrc.(m)js`

```javascript
import { prettierSettings } from "stijnklomp-linting-formatting-config/settings/prettier.js"

export default prettierSettings
```

##### Typedoc

To use Typedoc in your project, you need to create a Typedoc configuration file (`typedoc.(m)js`) and extend the Typedoc config (`stijnklomp-linting-formatting-config/settings/typedoc.js`).

`typedoc.(m)js`

```javascript
import { typedocSettings } from "stijnklomp-linting-formatting-config/settings/typedoc.js"

export default typedocSettings
```

##### Editor config

To use the provided editor config in your project, you need to create an editor config file (`.editorconfig`) and copy over the entire contents of the provided editor config. (`stijnklomp-linting-formatting-config/.editorconfig`)

##### Stylelint

To use Stylelint in your project, you need to create a Stylelint configuration file (`.stylelintrc.js`) and extend the Stylelint settings. (`stijnklomp-linting-formatting-config/settings/stylelint.js`)

`.stylelintrc.js`

```javascript
module.exports = {
	extends: [
		"./node_modules/stijnklomp-linting-formatting-config/settings/stylelint.js",
	],
}
```

## License

This project is licensed under the MIT License. Feel free to customize and use it for your own projects.
