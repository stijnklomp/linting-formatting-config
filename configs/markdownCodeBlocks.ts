import markdown from "eslint-plugin-markdown";

import { ConfigArray, suffixPackageName, appendNameIfExist } from "../helper";

export const configMarkdownCodeBlocks: ConfigArray = (
	markdown.configs.recommended as ConfigArray
).map((config) => ({
	...config,
	name: `${suffixPackageName} Markdown code blocks${appendNameIfExist(config.name)}`,
}));
