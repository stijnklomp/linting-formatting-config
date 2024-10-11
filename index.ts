// import jseslint from "@eslint/js"
import type { TSESLint } from "@typescript-eslint/utils";

import { ConfigArray } from "./variables";

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
	stylistic: true,
	jest: true,
	markdownCodeBlocks: true,
	jxs: false,
	// ----- End of configs ----- \\
	includeRemainder: false,
};
const containsBothJsAndTs = [
	// Include all configs that have both Javascript AND Typescript
	"stylistic",
	"tseslint",
];
const mandatoryConfigs = ["tseslint", "eslintJs", "json", "yml"];

export type ProvidedConfigOptions = typeof defaultConfigs;

type UsedConfigs = Omit<ProvidedConfigOptions, "includeRemainder">;

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

type Configs = Partial<ProvidedConfigOptions> & {
	includeRemainder: boolean;
};
export const config = ({
	configs = {
		includeRemainder: true,
	},
	typescript = true,
	strict = false, // TODO: Implement strict mode
}:
	| {
			configs?: Configs;
			typescript?: true;
			strict?: boolean;
	  }
	| {
			configs?: Configs;
			typescript?: false;
			strict?: false;
	  } = {}): ConfigArray => {
	const includedConfigs: Partial<UsedConfigs> = {};
	const allConfigs = { defaultConfigs };
	delete allConfigs["includeRemainder"];

	for (let i = 0, ii = mandatoryConfigs.length; i < ii; i++) {
		includedConfigs[mandatoryConfigs[i]] = true;
	}

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
