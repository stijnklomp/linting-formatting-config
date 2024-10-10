import tseslint from "typescript-eslint";
import typescriptEslintParser from "@typescript-eslint/parser";

import { jsFileExts, tsFileExts, ConfigArray } from "./variables";

export const configStylisticJavascript: ConfigArray =
	tseslint.configs.stylistic.map((config) => ({
		...config,
		files: jsFileExts,
		name: "TSEslint stylistic Javascript",
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module",
			},
		},
	}));

export const configStylisticTypescript: ConfigArray =
	tseslint.configs.stylisticTypeChecked.map((config) => ({
		...config,
		files: tsFileExts,
		name: "TSEslint stylistic Typescript",
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}));
