// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import prettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

import { ConfigArray, suffixPackageName } from "../helper.js"

export const configPrettier = (
	_params: { tsconfigRootDir?: string } = {},
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
): ConfigArray => [
	{
		name: `${suffixPackageName} eslint-plugin-prettier`,
		// ...eslintPluginPrettierRecommended,
		plugins: { prettier },
		...eslintConfigPrettier,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		rules: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			...eslintConfigPrettier.rules,
			"prettier/prettier": "error",
			// https://github.com/prettier/eslint-plugin-prettier/issues/65
			// "arrow-body-style": "off",
			// "prefer-arrow-callback": "off",
		},
	},
]
