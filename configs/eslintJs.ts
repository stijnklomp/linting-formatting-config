import js from "@eslint/js";

import { jsFileExts, ConfigArray } from "../helper.js";

export const configEslintJs: ConfigArray = [
	{
		name: "@eslint/js",
		files: jsFileExts,
		rules: js.configs.recommended.rules,
	},
];
