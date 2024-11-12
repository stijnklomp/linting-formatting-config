/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import tseslint from "typescript-eslint"
import typescriptEslintParser from "@typescript-eslint/parser"

import {
	jsFileExts,
	tsFileExts,
	ConfigArray,
	suffixPackageName,
	appendNameIfExist,
} from "../helper.js"

export const configTseslintJavascript = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray =>
	tseslint.configs.recommended.map((config) => ({
		...config,
		files: jsFileExts,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module",
			},
		},
		name: `${suffixPackageName} TSEslint recommended Javascript${appendNameIfExist(config.name)}`,
	}))

export const configTseslintTypescript = (params: {
	tsconfigRootDir?: string
}): ConfigArray =>
	tseslint.configs.recommendedTypeChecked.map((config) => ({
		...config,
		files: tsFileExts,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: params.tsconfigRootDir,
			},
		},
		name: `${suffixPackageName} TSEslint recommended Typescript${appendNameIfExist(config.name)}`,
	}))

export const configTseslintTypescriptStrict = (params: {
	tsconfigRootDir?: string
}): ConfigArray =>
	tseslint.configs.strictTypeChecked.map((config) => ({
		...config,
		files: tsFileExts,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: params.tsconfigRootDir,
			},
		},
		name: `TSEslint recommended Typescript strict${appendNameIfExist(config.name)}`,
	}))
