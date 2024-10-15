import eslintPluginYml from "eslint-plugin-yml";

import { ConfigArray, suffixPackageName } from "../helper.js";

export const configYml: ConfigArray = eslintPluginYml.configs[
	"flat/recommended"
].map((config) => ({
	...config,
	files: ["**/*.yml", "**/*.yaml"],
	name: `${suffixPackageName} YAML`,
	rules: {
		...config.rules,
		"yml/no-empty-mapping-value": "off",
	},
}));
