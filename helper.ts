import type { TSESLint } from "@typescript-eslint/utils"

export const jsFileExts = ["**/*.js", "**/*.mjs", "**/*.cjs"]
export const tsFileExts = ["**/*.ts"]

export type ConfigArray = TSESLint.FlatConfig.ConfigArray
export type Config = TSESLint.FlatConfig.Config
export type ConfigRules = TSESLint.FlatConfig.Rules

export const suffixPackageName = "stijnklomp-linting-formatting-config ->"

export const appendNameIfExist = (name?: string) =>
	name !== undefined ? ` -> ${name}` : ""
