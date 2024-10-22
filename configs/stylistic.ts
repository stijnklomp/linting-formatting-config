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

export const configStylisticJavascript = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray =>
	tseslint.configs.stylistic.map((config) => ({
		...config,
		files: jsFileExts,
		name: `${suffixPackageName} TSEslint stylistic Javascript${appendNameIfExist(config.name)}`,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module",
			},
		},
	}))

export const configStylisticTypescript = (params: {
	tsconfigRootDir?: string
}): ConfigArray =>
	tseslint.configs.stylisticTypeChecked.map((config) => ({
		...config,
		files: tsFileExts,
		name: `${suffixPackageName} TSEslint stylistic Typescript${appendNameIfExist(config.name)}`,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: params.tsconfigRootDir,
			},
		},
	}))
