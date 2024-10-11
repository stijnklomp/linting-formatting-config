import eslintPluginYml from "eslint-plugin-yml";

import { ConfigArray } from "../variables";

export const configYml: ConfigArray = eslintPluginYml.configs[
	"flat/recommended"
].map((config) => ({
	...config,
	files: ["**/*.yml", "**/*.yaml"],
	name: "YAML",
	rules: {
		...config.rules,
		"yml/no-empty-mapping-value": "off",
	},
}));
