import globals from "globals"
import typescriptEslintParser from "@typescript-eslint/parser"

import { tsFileExts, ConfigArray, suffixPackageName } from "../helper.js"
import * as eslintRules from "../rules/typescriptEslint.js"
import * as typescriptRules from "../rules/typescript.js"

export const configTypescript = (params: {
	tsconfigRootDir?: string
}): ConfigArray => [
	{
		files: tsFileExts,
		languageOptions: {
			globals: {
				...globals.node,
			},

			parser: typescriptEslintParser,
			parserOptions: {
				projectService: true,
				sourceType: "module",
				tsconfigRootDir: params.tsconfigRootDir,
			},
		},
		name: `${suffixPackageName} Typescript`,
		rules: {
			...typescriptRules.default,
			...eslintRules.default,
		},
	},
]
