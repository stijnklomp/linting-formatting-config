import type { Linter } from "eslint"
import { ConfigArray, suffixPackageName, appendNameIfExist } from "../helper.js"

export const configNext = async (
	_params: { tsconfigRootDir?: string } = {},
): Promise<ConfigArray> => {
	const { default: nextConfig } =
		(await import("eslint-config-next/core-web-vitals")) as {
			default: Linter.Config[]
		}

	return nextConfig.map((config) => ({
		...config,
		name: `${suffixPackageName} Next.js${appendNameIfExist(config.name)}`,
	}))
}
