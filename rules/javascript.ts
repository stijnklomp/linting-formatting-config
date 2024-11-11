import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"no-unused-vars": [
		"error",
		{
			argsIgnorePattern: "^_",
			varsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
			ignoreRestSiblings: true,
		},
	],
	"no-unused-expressions": "error",
}

export default rules
