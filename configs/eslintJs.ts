import js from "@eslint/js"

import { jsFileExts, ConfigArray, suffixPackageName } from "../helper.js"

export const configEslintJs = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		name: `${suffixPackageName} @eslint/js`,
		files: jsFileExts,
		rules: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			...(js.configs.recommended.rules as object),
		},
	},
]
