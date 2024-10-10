import tseslint from "typescript-eslint";
import typescriptEslintParser from "@typescript-eslint/parser";

import { jsFileExts, tsFileExts, ConfigArray } from "./variables";

export const configTseslintJavascript: ConfigArray =
	tseslint.configs.recommended.map((config) => ({
		...config,
		files: jsFileExts,
		name: "TSEslint recommended Javascript",
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module",
			},
		},
	}));

export const configTseslintTypescript: ConfigArray =
	tseslint.configs.recommendedTypeChecked.map((config) => ({
		...config,
		files: tsFileExts,
		name: "TSEslint recommended Typescript",
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}));
