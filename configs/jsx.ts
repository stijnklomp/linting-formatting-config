import { ConfigArray, suffixPackageName } from "../helper.js";

export const configJsx = (_params: {tsconfigRootDir?: string}): ConfigArray => [
	{
		name: `${suffixPackageName} JSX`,
	},
];
