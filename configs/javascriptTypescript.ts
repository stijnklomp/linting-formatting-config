import {
	jsFileExts,
	tsFileExts,
	ConfigArray,
	suffixPackageName,
} from "../helper.js"

import * as javascriptTypescriptRules from "../rules/javascriptTypescript.js"

export const configJavascriptTypescript = (_params: {
	tsconfigRootDir?: string
}): ConfigArray => [
	{
		name: `${suffixPackageName} Javascript`,
		files: [...jsFileExts, ...tsFileExts],
		rules: javascriptTypescriptRules.default,
	},
]
