import eslintPluginJsonc from "eslint-plugin-jsonc";

import { ConfigArray, suffixPackageName } from "../helper";

export const configJson: ConfigArray = eslintPluginJsonc.configs[
	"flat/recommended-with-jsonc"
].map((config) => ({
	...config,
	files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
	name: `${suffixPackageName} JSON`,
}));
