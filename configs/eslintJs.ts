import js from "@eslint/js";

import { jsFileExts, ConfigArray, suffixPackageName } from "../helper.js";

export const configEslintJs: ConfigArray = [
	{
		name: `${suffixPackageName} @eslint/js`,
		files: jsFileExts,
		rules: js.configs.recommended.rules,
	},
];
