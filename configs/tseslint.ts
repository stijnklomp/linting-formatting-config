import tseslint from "typescript-eslint";
import typescriptEslintParser from "@typescript-eslint/parser";

import {
	jsFileExts,
	tsFileExts,
	ConfigArray,
	appendNameIfExist,
} from "../helper";

export const configTseslintJavascript: ConfigArray =
	tseslint.configs.recommended.map((config) => ({
		...config,
		files: jsFileExts,
		name: `TSEslint recommended Javascript${appendNameIfExist(config.name)}`,
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
		name: `TSEslint recommended Typescript${appendNameIfExist(config.name)}`,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}));

export const configTseslintTypescriptStrict: ConfigArray =
	tseslint.configs.strictTypeChecked.map((config) => ({
		...config,
		files: tsFileExts,
		name: `TSEslint recommended Typescript strict${appendNameIfExist(config.name)}`,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}));
