import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"@typescript-eslint/no-unused-vars": [
		"error",
		{
			argsIgnorePattern: "^_",
			varsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
			ignoreRestSiblings: true,
		},
	],
	"@typescript-eslint/no-unused-expressions": "error",
	"@typescript-eslint/no-unnecessary-condition": "error",
	"@typescript-eslint/no-inferrable-types": "off",
	"@typescript-eslint/restrict-template-expressions": "warn",
	"@typescript-eslint/no-explicit-any": "warn",
	"@typescript-eslint/consistent-type-definitions": ["error", "type"],
}

export default rules
