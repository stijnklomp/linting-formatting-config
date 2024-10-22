import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

import { ConfigArray, suffixPackageName } from "../helper.js"

export const configPrettier = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		name: `${suffixPackageName} eslint-plugin-prettier`,
		...eslintPluginPrettierRecommended,
	},
]

export const prettierSettings = {
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: "always",
	insertPragma: false,
	htmlWhitespaceSensitivity: "css",
	overrides: [
		{
			files: ["**/*.{yml,yaml}"],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
