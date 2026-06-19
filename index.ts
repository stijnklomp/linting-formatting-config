import { ConfigArray, Config } from "./helper.js"

import { configPrettier } from "./configs/prettier.js"
import { configEslintJs } from "./configs/eslintJs.js"
import { configJson } from "./configs/json.js"
import { configYml } from "./configs/yml.js"
import {
	configTseslintJavascript,
	configTseslintTypescript,
	configTseslintTypescriptStrict,
} from "./configs/typescriptEslint.js"
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

// ▼▼▼▼
const optionalConfigs = {
	jest: true,
	jxs: false,
	markdownCodeBlocks: true,
	next: false,
	stylistic: true,
}
// ▲▲▲▲

export type ProvidedConfigOptions = typeof optionalConfigs
type UsedConfigs = Record<string, boolean>

const mandatoryConfigs = [
	// Includes all configs that the user CANNOT select but are always added
	"json",
	"yml",
]
const containsBothJsAndTs = [
	// Includes all configs that have both JavaScript AND TypeScript
	// This needs to added in addition to either "optionalConfigs" or "mandatoryConfigs"
	"stylistic",
	"tseslint",
]
const availableConfigs = {
	configJest,
	configJson,
	configJsx,
	configMarkdownCodeBlocks,
	configStylisticJavascript,
	configStylisticTypescript,
	configTseslintJavascript,
	configTseslintTypescript,
	configYml,
}

type ConfigFunction = (params: {
	tsconfigRootDir?: string
}) => ConfigArray | Promise<ConfigArray>

const lazyConfigs: Record<string, () => Promise<ConfigFunction>> = {
	next: async () => {
		const { configNext } = await import("./configs/next.js")

		return configNext
	},
}

const capitalizeFirstLetter = (string: string): string =>
	string.charAt(0).toUpperCase() + string.slice(1)
const retrieveConfig = (
	key: string,
	suffix: string,
): ConfigFunction | undefined =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
	(availableConfigs as Record<string, any>)[
		`config${capitalizeFirstLetter(key)}${suffix}`
	]
const buildConfig = async (
	typescript: boolean,
	configs: UsedConfigs,
	tsconfigRootDir: string,
): Promise<ConfigArray> => {
	const finalConfig: ConfigArray = []

	for (const key of Object.keys(configs)) {
		let suffix = ""

		if (containsBothJsAndTs.includes(key)) {
			const retrievedConfig = retrieveConfig(key, "Javascript")

			if (retrievedConfig) {
				const result = await retrievedConfig({ tsconfigRootDir })
				finalConfig.push(...result)
			}

			if (!typescript) continue

			suffix = "Typescript"
		}

		const retrievedConfig = retrieveConfig(key, suffix)

		if (retrievedConfig) {
			const result = await retrievedConfig({ tsconfigRootDir })
			finalConfig.push(...result)
		} else {
			const lazyLoader = lazyConfigs[key]

			if (lazyLoader) {
				const lazyFn = await lazyLoader()
				const result = await lazyFn({ tsconfigRootDir })
				finalConfig.push(...result)
			}
		}
	}

	return finalConfig
}

const ignoresConfig: Config = {
	ignores: ["**/*.d.ts", "dist/*"],
}

export type Configs = Partial<ProvidedConfigOptions> & {
	includeRemainder: boolean
}

export const config = async ({
	configs = {
		includeRemainder: false,
	},
	strict = false,
	tsconfigRootDir = ".",
	typescript = true,
}: {
	configs?: Configs
	typescript?: boolean
	strict?: boolean
	tsconfigRootDir?: string
} = {}): Promise<ConfigArray> => {
	const includedConfigs: Partial<UsedConfigs> = {}
	const allDefaultConfigs: UsedConfigs = { ...optionalConfigs }
	const finalConfig: ConfigArray = []

	if (strict) {
		finalConfig.push(...configTseslintTypescriptStrict({ tsconfigRootDir }))
	} else {
		mandatoryConfigs.splice(1, 0, "tseslint")
	}

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
		...(await buildConfig(
			typescript,
			includedConfigs as UsedConfigs,
			tsconfigRootDir,
		)),
	)

	finalConfig.push(...configPrettier())

	finalConfig.push(ignoresConfig)

	return finalConfig
}

export default config
