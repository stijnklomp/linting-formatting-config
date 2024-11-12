import reactPlugin from "eslint-plugin-react"
import globals from "globals"

import { ConfigArray, suffixPackageName } from "../helper.js"
import * as reactRules from "../rules/react.js"

export const configReact = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		name: `${suffixPackageName} React`,
		...(reactPlugin.configs.flat.recommended as unknown as ConfigArray),
		...(reactPlugin.configs.flat["jsx-runtime"] as unknown as ConfigArray),
		files: ["**/*.jsx", "**/*.tsx"],
		languageOptions: {
			...reactPlugin.configs.flat.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
		rules: {
			...(reactPlugin.configs.flat.recommended.rules as object),
			...reactRules.default,
		},
	},
]
