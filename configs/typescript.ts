import globals from "globals"
import typescriptEslintParser from "@typescript-eslint/parser"

import { tsFileExts, ConfigArray, suffixPackageName } from "../helper.js"
import * as eslintRules from "../rules/typescriptEslintRules.js"
import * as typescriptRules from "../rules/typescriptRules.js"

export const configTypescript = (params: {
	tsconfigRootDir?: string
}): ConfigArray => [
	{
		files: tsFileExts,
		languageOptions: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				projectService: true,
				sourceType: "module",
				tsconfigRootDir: params.tsconfigRootDir,
			},
			globals: {
				...globals.node,
			},
		},
		name: `${suffixPackageName} Typescript`,
		rules: {
			...typescriptRules.default,
			...eslintRules.default,
		},
	},
]
