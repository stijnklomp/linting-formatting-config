// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import prettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

import { ConfigArray, suffixPackageName } from "../helper.js"

export const configPrettier = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		name: `${suffixPackageName} eslint-plugin-prettier`,
		// ...eslintPluginPrettierRecommended,
		plugins: { prettier },
		...eslintConfigPrettier,

		rules: {
			...eslintConfigPrettier.rules,
			"prettier/prettier": "error",
			// https://github.com/prettier/eslint-plugin-prettier/issues/65
			// "arrow-body-style": "off",
			// "prefer-arrow-callback": "off",
		},
	},
]
