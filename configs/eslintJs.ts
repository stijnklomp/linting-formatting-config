import js from "@eslint/js"

import { jsFileExts, ConfigArray, suffixPackageName } from "../helper.js"

export const configEslintJs = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		files: jsFileExts,
		name: `${suffixPackageName} @eslint/js`,
		rules: {
			...(js.configs.recommended.rules as object),
		},
	},
]
