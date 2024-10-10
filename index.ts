// import jseslint from "@eslint/js"
import type { TSESLint } from "@typescript-eslint/utils";

import {
	configStylisticJavascript,
	configStylisticTypescript,
} from "./configs/stylistic";
import {
	configTseslintJavascript,
	configTseslintTypescript,
} from "./configs/tseslint";
import { configJson } from "./configs/json";
import { configYml } from "./configs/yml";
import { configMarkdownCodeBlocks } from "./configs/markdownCodeBlocks";
import { configTypescript } from "./configs/typescript";

const defaultConfigs = {
	// Include all available configs either set to `true` or `false`
	// -- Beginning of configs -- \\
	json: true,
	stylistic: true,
	tseslint: true,
	yml: true,
	markdownCodeBlocks: true,
	// ----- End of configs ----- \\
	includeRemainder: false,
};
const containsBothJsAndTs = [
	// Include all configs that have both Javascript AND Typescript
	"stylistic",
	"tseslint",
];

export type ProvidedConfigOptions = typeof defaultConfigs;

type UsedConfigs = Omit<ProvidedConfigOptions, "includeRemainder">;
type ConfigArray = TSESLint.FlatConfig.ConfigArray;

const retrieveConfig = (key: string, suffix: string): ConfigArray =>
	window[`config${key.toUpperCase()}`];

const buildConfig = (configs: UsedConfigs): ConfigArray => {
	const finalConfig: ConfigArray = [];

	Object.keys(configs).forEach((key) => {
		let suffix = "";

		if (containsBothJsAndTs.includes(key)) {
			finalConfig.push(...retrieveConfig(key, "Javascript"));
			suffix = "Typescript";
		}

		finalConfig.push(...retrieveConfig(key, suffix));
	});

	return finalConfig;
};

export const config = (
	configs: Partial<ProvidedConfigOptions> & { includeRemainder: boolean } = {
		includeRemainder: true,
	},
	typescript = true,
): ConfigArray => {
	const includedConfigs: Partial<UsedConfigs> = {};
	const allConfigs = { defaultConfigs };
	delete allConfigs["includeRemainder"];

	for (const [k, v] of Object.entries(configs)) {
		if (k === "includeRemainder") continue;
		if (v) includedConfigs[k] = true;
		delete allConfigs[k];
	}

	Object.keys(allConfigs).forEach((k) => {
		configs.includeRemainder
			? (includedConfigs[k] = true)
			: delete includedConfigs[k];
	});

	const finalConfig = buildConfig(includedConfigs as UsedConfigs);

	if (typescript) finalConfig.push(...configTypescript);

	return finalConfig;
};
