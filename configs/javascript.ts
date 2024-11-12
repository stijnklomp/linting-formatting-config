import { jsFileExts, ConfigArray, suffixPackageName } from "../helper.js"

import * as javascriptRules from "../rules/javascript.js"

export const configJavascript = (_params: {
	tsconfigRootDir?: string
}): ConfigArray => [
	{
		files: jsFileExts,
		name: `${suffixPackageName} Javascript`,
		rules: javascriptRules.default,
	},
]
