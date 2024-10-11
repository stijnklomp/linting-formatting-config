import js from "@eslint/js";

import { jsFileExts, ConfigArray } from "./variables.js";

export const configEslintJs: ConfigArray = [
	{
		files: jsFileExts,
		rules: js.configs.recommended.rules,
	},
];
