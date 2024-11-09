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
