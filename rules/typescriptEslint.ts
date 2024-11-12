import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"@typescript-eslint/consistent-type-definitions": ["error", "type"],
	"@typescript-eslint/naming-convention": [
		"error",
		{
			format: ["camelCase"],
			selector: "default",
		},
		{
			format: ["camelCase", "UPPER_CASE"],
			selector: "variable",
		},
		{
			format: ["camelCase"],
			leadingUnderscore: "allow",
			selector: "parameter",
		},
		{
			format: ["PascalCase"],
			selector: "typeLike",
		},
	],
	"@typescript-eslint/no-explicit-any": "warn",
	"@typescript-eslint/no-inferrable-types": "off",
	"@typescript-eslint/no-unnecessary-condition": "error",
	"@typescript-eslint/no-unused-expressions": "error",
	"@typescript-eslint/no-unused-vars": [
		"error",
		{
			argsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
			ignoreRestSiblings: true,
			varsIgnorePattern: "^_",
		},
	],
	"@typescript-eslint/restrict-template-expressions": "warn",
}

export default rules
