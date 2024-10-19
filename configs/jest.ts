import { ConfigArray, suffixPackageName } from "../helper.js";

export const configJest = (_params: {tsconfigRootDir?: string}): ConfigArray => [
	{
		name: `${suffixPackageName} Jest`,
	},
];
