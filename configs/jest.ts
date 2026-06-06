import jest from "eslint-plugin-jest"

import { ConfigArray, suffixPackageName } from "../helper.js"
import * as jestRules from "../rules/jest.js"

const jestFiles = ["**/*test.[jt]s?(x)", "**/*.spec.[jt]s?(x)"]

export const configJest = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		...jest.configs["flat/recommended"],
		files: jestFiles,
		name: `${suffixPackageName} Jest`,
		rules: {
			...jestRules.default,
		},
		settings: {
			jest: {
				version: 27,
			},
		},
	},
]
