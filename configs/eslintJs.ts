import js from "@eslint/js";

import { jsFileExts, ConfigArray, suffixPackageName } from "../helper";

export const configEslintJs: ConfigArray = [
	{
		name: `${suffixPackageName} @eslint/js`,
		files: jsFileExts,
		rules: js.configs.recommended.rules,
	},
];
