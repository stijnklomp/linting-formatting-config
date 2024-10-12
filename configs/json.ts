import eslintPluginJsonc from "eslint-plugin-jsonc";

import { ConfigArray } from "../helper";

export const configJson: ConfigArray = eslintPluginJsonc.configs[
	"flat/recommended-with-jsonc"
].map((config) => ({
	...config,
	files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
	name: "JSON",
}));
