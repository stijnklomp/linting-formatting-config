import tseslint from "typescript-eslint"

import config from "./dist/index.js"
import { tsFileExts, suffixPackageName } from "./dist/helper.js"

export default tseslint.config(
	...config({
		strict: true,
		tsconfigRootDir: ".",
		typescript: true,
	}),
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
)
