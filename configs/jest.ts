import jest from "eslint-plugin-jest"

import { ConfigArray, suffixPackageName } from "../helper.js"
import * as jestRules from "../rules/jestRules.js"

export const configJest = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray => [
	{
		name: `${suffixPackageName} Jest`,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		...(jest.configs["flat/recommended"] as ConfigArray),
		files: ["**/*test.[jt]s?(x)", "**/*.spec.[jt]s?(x)"],
		settings: {
			jest: {
				version: 27,
			},
		},
		rules: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			...(jest.configs["flat/recommended"].rules as object),
			...jestRules.default,
		},
	},
]
