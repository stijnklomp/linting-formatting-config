import type { Linter } from "eslint"
import nextConfig from "eslint-config-next/core-web-vitals"
import { ConfigArray, suffixPackageName, appendNameIfExist } from "../helper.js"

export const configNext = (
	_params: { tsconfigRootDir?: string } = {},
): ConfigArray =>
	(nextConfig as Linter.Config[]).map((config) => ({
		...config,
		name: `${suffixPackageName} Next.js${appendNameIfExist(config.name)}`,
	}))
