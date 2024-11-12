import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	camelcase: "error",
	"no-unused-expressions": "error",
	"no-unused-vars": [
		"error",
		{
			argsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
			ignoreRestSiblings: true,
			varsIgnorePattern: "^_",
		},
	],
}

export default rules
