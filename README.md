# ESLint configuration

<p align="center">
	An <a href="https://eslint.org/" target="_blank" rel="noopener">ESLint</a> and <a href="https://prettier.io/" target="_blank" rel="noopener">Prettier</a> configuration for linting and formatting code projects. The configurations include rules and settings for code style, formatting, and best practices.
</p>
<p align="center">
	This project uses <a href="https://typescript-eslint.io/" target="_blank" rel="noopener">typescript-eslint</a> to easily implement multiple configurations with <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">Typescript</a> support.
</p>
<p align="center">
	<a href="https://www.npmjs.com/package/stijnklomp-linting-formatting-config" target="_blank" rel="noopener">
		<img src="https://img.shields.io/npm/v/stijnklomp-linting-formatting-config" alt="NPM Version" />
	</a>
	<img src="https://img.shields.io/github/license/stijnklomp/nestjs-template?style=flat" alt="Package License" />
</p>

## Installation

You can install the package via npm by running the following command:

```sh
npm install stijnklomp-linting-formatting-config --save-dev
```

Use the following to install all peer dependencies not marked as optional:

```sh
npx install-peerdeps --dev stijnklomp-linting-formatting-config --only-peers
```

### Dependencies

This package uses peer dependencies. These are packages that the project expects to be provided by the user. They are not installed automatically and must be manually installed.

Check the `peerDependencies` section of the `package.json` file to ensure you have compatible versions of the required dependencies.

#### Required dependencies

The below dependencies are required for both JavaScript and TypeScript.

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

#### Optional dependencies

-   **JavaScript**:
    -   `@eslint/js` (Will not be loaded when using TypeScript)
-   **Testing**:
    -   `eslint-plugin-jest` (Jest)
-   **Markdown**:
    -   `eslint-plugin-markdown` (Markdown)
-   **React**:
    -   `eslint-plugin-react`
    -   `eslint-plugin-react-hooks`
-   **CSS/SASS**:
    -   `stylelint`
    -   `stylelint-config-prettier-scss`
    -   `stylelint-config-standard-scss`
-   **TypeScript**:
    -   `typescript`

## Usage

Find usage examples below for everything that requires its own configuration file. (`ESLint`, `Prettier`, `Typedoc`, `editor config` and `Stylelint`)

#### ESLint (Mandatory)

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

Optional configurations can be used by specifying them in the `configs` parameter. For a full list of available configs please refer to the `optionalConfigs` variable in `index.ts`.

```javascript
// Example of no optional configurations
// Not specifying any optional configurations will use the default values
// Refer to the `optionalConfigs` variable in `index.ts` for default values
config({
	strict: false, // Defaults to 'false' - Available only with TypeScript
	tsconfigRootDir: ".", // Defaults to '.'
	typescript: true, // Defaults to 'true'
})

// Example of some optional configurations
config({
	configs: {
		includeRemainder: false, // Include any optional configurations not specified - Defaults to 'false'
		jest: true,
		yml: true,
	},
	strict: false,
	tsconfigRootDir: ".",
	typescript: true,
})

// Example of some optional configurations with `includeRemainder` set to `true`
config({
	configs: {
		includeRemainder: true,
		jsx: false,
		react: false,
	},
	typescript: false,
})
```

#### Prettier (Mandatory)

To use Prettier in your project, you need to create a Prettier configuration file (`.prettierrc.(m)js`) and extend the Prettier config (`stijnklomp-linting-formatting-config/prettier/prettier`).

`.prettierrc.(m)js`

```javascript
import { prettierSettings } from "stijnklomp-linting-formatting-config/settings/prettier.js"

export default prettierSettings
```

#### Typedoc (Optional)

To use Typedoc in your project, you need to create a Typedoc configuration file (`typedoc.(m)js`) and extend the Typedoc config (`stijnklomp-linting-formatting-config/settings/typedoc.js`).

`typedoc.(m)js`

```javascript
import { typedocSettings } from "stijnklomp-linting-formatting-config/settings/typedoc.js"

export default typedocSettings
```

#### Editor config (Optional)

To use the provided editor config in your project, you need to create an editor config file (`.editorconfig`) and copy over the entire contents of the provided editor config. (`stijnklomp-linting-formatting-config/.editorconfig`)

#### Stylelint (Optional)

To use Stylelint in your project, you need to create a Stylelint configuration file (`.stylelintrc.js`) and extend the Stylelint settings. (`stijnklomp-linting-formatting-config/settings/stylelint.js`) **Note:** Flat config is currently not supported.

`.stylelintrc.js`

```javascript
module.exports = {
	extends: [
		"./node_modules/stijnklomp-linting-formatting-config/settings/stylelint.js",
	],
}
```

## JSON sort

This package comes with a JSON sort Bash script that will go through all specified JSON files and sort the keys in alphabetical order.

Ensure the script has execution permissions:

```sh
chmod +x sortJson.sh
```

To use it just call it from the command line:

```sh
./sortJson.sh
```

You can specify which directories and/or files to exclude by specifying them directly after the script call:

```sh
./sortJson.sh "./custom/path/*" "./another/exclude.json"
```

## License

This project is licensed under the MIT License. Feel free to customize and use it for your own projects.
