import { ConfigArray, Config } from "./helper.js"

import { configPrettier } from "./configs/prettier.js"
import { configEslintJs } from "./configs/eslintJs.js"
import { configJson } from "./configs/json.js"
import { configYml } from "./configs/yml.js"
import {
	configTseslintJavascript,
	configTseslintTypescript,
	configTseslintTypescriptStrict,
} from "./configs/tseslint.js"
import { configJavascript } from "./configs/javascript.js"
import { configTypescript } from "./configs/typescript.js"
import { configJavascriptTypescript } from "./configs/javascriptTypescript.js"

import {
	configStylisticJavascript,
	configStylisticTypescript,
} from "./configs/stylistic.js"
import { configMarkdownCodeBlocks } from "./configs/markdownCodeBlocks.js"
import { configJest } from "./configs/jest.js"
import { configJsx } from "./configs/jsx.js"

const availableConfigs = {
	configTseslintJavascript,
	configTseslintTypescript,
	configJson,
	configYml,
	configStylisticJavascript,
	configStylisticTypescript,
	configMarkdownCodeBlocks,
	configJest,
	configJsx,
}

const defaultConfigs = {
	// Include all configs that the user CAN select
	// Set the value to `true` or `false` based on whether or not it should be included by default
	jxs: false,
	markdownCodeBlocks: true,
	stylistic: true,
	jest: true,
	react: false,
}
const mandatoryConfigs = [
	// Include all configs that the user CANNOT select but are always added
	"json",
	"yml",
]
const containsBothJsAndTs = [
	// Include all configs that have both Javascript AND Typescript
	// This needs to added in addition to either "defaultConfigs" or "mandatoryConfigs"
	"stylistic",
	"tseslint",
]

export type ProvidedConfigOptions = typeof defaultConfigs

// type UsedConfigs = Omit<ProvidedConfigOptions, "includeRemainder">;
type UsedConfigs = Record<string, boolean>

const capitalizeFirstLetter = (string: string): string =>
	string.charAt(0).toUpperCase() + string.slice(1)
const retrieveConfig = (
	key: string,
	suffix: string,
): ((params: { tsconfigRootDir?: string }) => ConfigArray) =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
	(availableConfigs as Record<string, any>)[
		`config${capitalizeFirstLetter(key)}${suffix}`
	]
const buildConfig = (
	configs: UsedConfigs,
	tsconfigRootDir: string,
): ConfigArray => {
	const finalConfig: ConfigArray = []

	Object.keys(configs).forEach((key) => {
		let suffix = ""

		if (containsBothJsAndTs.includes(key)) {
			const retrievedConfig = retrieveConfig(key, "Javascript")
			finalConfig.push(...retrievedConfig({ tsconfigRootDir }))
			suffix = "Typescript"
		}

		const retrievedConfig = retrieveConfig(key, suffix)
		finalConfig.push(...retrievedConfig({ tsconfigRootDir }))
	})

	return finalConfig
}

const ignoresConfig: Config = {
	ignores: ["dist/*"],
}

export type Configs = Partial<ProvidedConfigOptions> & {
	includeRemainder: boolean
}

export const config = ({
	configs = {
		includeRemainder: false,
	},
	typescript = true,
	strict = false,
	tsconfigRootDir = ".",
}:
	| {
			configs?: Configs
			typescript?: true
			strict?: boolean
			tsconfigRootDir?: string
	  }
	| {
			configs?: Configs
			typescript?: false
			strict?: false
			tsconfigRootDir?: undefined
	  } = {}): ConfigArray => {
	const includedConfigs: Partial<UsedConfigs> = {}
	const allDefaultConfigs: UsedConfigs = { ...defaultConfigs }
	const finalConfig: ConfigArray = []

	strict
		? finalConfig.push(
				...configTseslintTypescriptStrict({ tsconfigRootDir }),
			)
		: mandatoryConfigs.splice(1, 0, "tseslint")

	if (typescript) {
		finalConfig.push(...configTypescript({ tsconfigRootDir }))
	} else {
		finalConfig.push(...configEslintJs({ tsconfigRootDir }))
		finalConfig.push(...configJavascript({ tsconfigRootDir }))
	}

	finalConfig.push(...configJavascriptTypescript({ tsconfigRootDir }))

	for (let i = 0, ii = mandatoryConfigs.length; i < ii; i++) {
		includedConfigs[mandatoryConfigs[i]] = true
	}

	for (const [k, v] of Object.entries(configs)) {
		if (k === "includeRemainder") continue

		if (v) includedConfigs[k] = true
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
		delete allDefaultConfigs[k]
	}

	Object.keys(allDefaultConfigs).forEach((k) => {
		if (allDefaultConfigs[k] || configs.includeRemainder)
			includedConfigs[k] = true
	})

	finalConfig.push(
		...buildConfig(includedConfigs as UsedConfigs, tsconfigRootDir),
	)

	finalConfig.push(...configPrettier())

	finalConfig.push(ignoresConfig)

	return finalConfig
}

export default config
