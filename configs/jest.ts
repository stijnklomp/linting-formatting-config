import { ConfigArray, suffixPackageName } from "../helper.js";

export const configJest = (params: {tsconfigRootDir?: string}): ConfigArray => [
	{
		name: `${suffixPackageName} Jest`,
	},
];
