import eslintPluginJsonc from "eslint-plugin-jsonc"

import { ConfigArray, suffixPackageName } from "../helper.js"
import * as jsonRules from "../rules/json.js"

export const configJson = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray =>
	eslintPluginJsonc.configs["flat/recommended-with-jsonc"].map((config) => ({
		...config,
		files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
		name: `${suffixPackageName} JSON`,
		rules: {
			...config.rules,
			...jsonRules.default,
		},
	}))
