import { jsFileExts, ConfigArray, suffixPackageName } from "../helper.js"

import * as javascriptRules from "../rules/javascript.js"

export const configJavascript = (_params: {
	tsconfigRootDir?: string
}): ConfigArray => [
	{
		name: `${suffixPackageName} Javascript`,
		files: jsFileExts,
		rules: javascriptRules.default,
	},
]
