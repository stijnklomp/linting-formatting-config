import packageJson from "eslint-plugin-package-json/configs/recommended"

import { ConfigArray, suffixPackageName } from "../helper.js"

export const configJson = (
	_params: { tsconfigRootDir?: string } = {},
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
): ConfigArray => [
	{
		...packageJson,
		name: `${suffixPackageName} package.json`,
	},
]
