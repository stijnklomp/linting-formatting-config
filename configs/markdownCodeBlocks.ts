import markdown from "eslint-plugin-markdown";

import { ConfigArray, suffixPackageName, appendNameIfExist } from "../helper.js";

export const configMarkdownCodeBlocks = (_params: {tsconfigRootDir?: string}): ConfigArray => (
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	markdown.configs.recommended as ConfigArray
).map((config) => ({
	...config,
	name: `${suffixPackageName} Markdown code blocks${appendNameIfExist(config.name)}`,
}));
