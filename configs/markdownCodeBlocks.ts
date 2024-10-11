import markdown from "eslint-plugin-markdown";

import { ConfigArray } from "../variables";

export const configMarkdownCodeBlocks: ConfigArray = (
	markdown.configs.recommended as ConfigArray
).map((config) => ({
	...config,
	name: "Markdown code blocks",
}));
