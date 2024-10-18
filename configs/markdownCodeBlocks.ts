import markdown from "eslint-plugin-markdown";

import { ConfigArray, suffixPackageName, appendNameIfExist } from "../helper.js";

export const configMarkdownCodeBlocks = (params: {tsconfigRootDir?: string}): ConfigArray => (
	markdown.configs.recommended as ConfigArray
).map((config) => ({
	...config,
	name: `${suffixPackageName} Markdown code blocks${appendNameIfExist(config.name)}`,
}));
