import { ConfigArray, suffixPackageName } from "../helper.js";

export const configJsx = (params: {tsconfigRootDir?: string}): ConfigArray => [
	{
		name: `${suffixPackageName} JSX`,
	},
];
