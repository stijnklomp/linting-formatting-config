import { fileURLToPath } from "node:url"

import tseslint from "typescript-eslint"

import config from "./dist/index.js"
import { tsFileExts, suffixPackageName } from "./dist/helper.js"

const baseConfig = await config({
	strict: true,
	tsconfigRootDir: fileURLToPath(new URL(".", import.meta.url)),
	typescript: true,
})

export default [
	...baseConfig,
	{
		files: tsFileExts,
		name: `${suffixPackageName} Jest`,
		rules: {
			"@typescript-eslint/naming-convention": [
				"error",
				{
					filter: {
						match: false,
						regex: "[-_/]",
					},
					format: ["camelCase"],
					selector: "default",
				},
				{
					format: ["camelCase", "UPPER_CASE"],
					selector: "variable",
				},
				{
					format: ["camelCase"],
					leadingUnderscore: "allow",
					selector: "parameter",
				},
				{
					format: ["PascalCase"],
					selector: "typeLike",
				},
			],
		},
	},
]
