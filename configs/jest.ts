import jest from "eslint-plugin-jest"

import { ConfigArray, suffixPackageName } from "../helper.js"
import * as jestRules from "../rules/jest.js"

export const configJest = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		files: ["**/*test.[jt]s?(x)", "**/*.spec.[jt]s?(x)"],
		name: `${suffixPackageName} Jest`,
		...(jest.configs["flat/recommended"] as ConfigArray),
		rules: {
			...(jest.configs["flat/recommended"].rules as object),
			...jestRules.default,
		},
		settings: {
			jest: {
				version: 27,
			},
		},
	},
]
