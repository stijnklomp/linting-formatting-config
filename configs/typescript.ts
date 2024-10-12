import globals from "globals";
import typescriptEslintParser from "@typescript-eslint/parser";

import { tsFileExts, ConfigArray } from "../helper.js";
import * as eslintRules from "../rules/eslintRules.js";
// import * as typescriptRules from "../rules/typescript/typescriptRules.js";

export const configTypescript: ConfigArray = [
	{
		files: tsFileExts,
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.node,
			},
		},
		name: "Typescript",
		rules: {
			...eslintRules.default.rules, // Should these rules be applied to Javascript projects as well?
			// ...typescriptRules.default.overrides[0].rules,
			"@typescript-eslint/unbound-method": "off",
			"@typescript-eslint/consistent-type-definitions": ["warn", "type"],
		},
	},
];
