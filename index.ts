import { ConfigArray } from "./helper.js";

import { configEslintJs } from "./configs/eslintJs.js";
import { configJson } from "./configs/json.js";
import { configYml } from "./configs/yml.js";
import {
	configTseslintJavascript,
	configTseslintTypescript,
	configTseslintTypescriptStrict,
} from "./configs/tseslint.js";
import { configTypescript } from "./configs/typescript.js";

import {
	configStylisticJavascript,
	configStylisticTypescript,
} from "./configs/stylistic.js";
import { configMarkdownCodeBlocks } from "./configs/markdownCodeBlocks.js";
import { configJest } from "./configs/jest.js";
import { configJsx } from "./configs/jsx.js";

const availableConfigs = {
	configEslintJs,
	configTseslintJavascript,
	configTseslintTypescript,
	configJson,
	configYml,
	configStylisticJavascript,
	configStylisticTypescript,
	configMarkdownCodeBlocks,
	configJest,
	configJsx,
};

const defaultConfigs = {
	// Include all configs that the user CAN select
	// Set the value to `true` or `false` based on whether or not it should be included by default
	jxs: false,
	markdownCodeBlocks: true,
	stylistic: true,
	jest: true,
};
const mandatoryConfigs = [
	// Include all configs that the user CANNOT select but are always added
	"eslintJs",
	"json",
	"yml",
];
const containsBothJsAndTs = [
	// Include all configs that have both Javascript AND Typescript
	// This needs to added in addition to either "defaultConfigs" or "mandatoryConfigs"
	"stylistic",
	"tseslint",
];

export type ProvidedConfigOptions = typeof defaultConfigs;

type UsedConfigs = Omit<ProvidedConfigOptions, "includeRemainder">;

const capitalizeFirstLetter = (string: string): string =>
	string.charAt(0).toUpperCase() + string.slice(1);
const retrieveConfig = (key: string, suffix: string): ConfigArray =>
	availableConfigs[`config${capitalizeFirstLetter(key)}${suffix}`];
const buildConfig = (configs: UsedConfigs): ConfigArray => {
	const finalConfig: ConfigArray = [];

	Object.keys(configs).forEach((key) => {
		let suffix = "";

		if (containsBothJsAndTs.includes(key)) {
			const retrievedConfig = retrieveConfig(key, "Javascript");
			finalConfig.push(...retrievedConfig);
			suffix = "Typescript";
		}

		const retrievedConfig = retrieveConfig(key, suffix);
		finalConfig.push(...retrievedConfig);
	});

	return finalConfig;
};

type Configs = Partial<ProvidedConfigOptions> & {
	includeRemainder: boolean;
};
export const config = ({
	configs = {
		includeRemainder: false,
	},
	typescript = true,
	strict = false,
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
	const allDefaultConfigs = { ...defaultConfigs };
	const finalConfig: ConfigArray = [];

	if (typescript) finalConfig.push(...configTypescript);
	strict
		? finalConfig.push(...configTseslintTypescriptStrict)
		: mandatoryConfigs.splice(1, 0, "tseslint");

	for (let i = 0, ii = mandatoryConfigs.length; i < ii; i++) {
		includedConfigs[mandatoryConfigs[i]] = true;
	}

	for (const [k, v] of Object.entries(configs)) {
		if (k === "includeRemainder") continue;
		if (v) includedConfigs[k] = true;
		delete allDefaultConfigs[k];
	}

	Object.keys(allDefaultConfigs).forEach((k) => {
		if (allDefaultConfigs[k] || configs.includeRemainder)
			includedConfigs[k] = true;
	});

	finalConfig.push(...buildConfig(includedConfigs as UsedConfigs));

	return finalConfig;
};

export default config;
