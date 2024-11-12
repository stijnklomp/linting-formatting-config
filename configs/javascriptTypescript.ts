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
		files: [...jsFileExts, ...tsFileExts],
		name: `${suffixPackageName} Javascript`,
		rules: javascriptTypescriptRules.default,
	},
]
