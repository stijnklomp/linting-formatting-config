import markdown from "eslint-plugin-markdown";

import { ConfigArray, appendNameIfExist } from "../helper";

export const configMarkdownCodeBlocks: ConfigArray = (
	markdown.configs.recommended as ConfigArray
).map((config) => ({
	...config,
	name: `Markdown code blocks${appendNameIfExist(config.name)}`,
}));
