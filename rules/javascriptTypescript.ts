import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"no-confusing-arrow": "off",
	"no-console": ["warn", { allow: ["warn", "error"] }],
	"no-duplicate-imports": "error",
	"no-mixed-spaces-and-tabs": "error",
	"no-restricted-syntax": [
		"error",
		{
			message: "Unexpected property on console object was called",
			selector:
				"CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
		},
		"functionexpression",
		"functiondeclaration",
	],
	"no-this-before-super": "error",
	"no-var": "error",
	"padding-line-between-statements": [
		"error",
		{
			blankLine: "always",
			next: ["export", "class", "function", "try", "if", "return"],
			prev: "*",
		},
		{ blankLine: "always", next: "*", prev: "block-like" },
		{
			blankLine: "never",
			next: ["case", "default"],
			prev: "block-like",
		},
		{ blankLine: "any", next: "export", prev: "export" },
	],
	"prefer-arrow-callback": [
		"error",
		{ allowNamedFunctions: false, allowUnboundThis: false },
	],
	"prefer-const": [
		"error",
		{ destructuring: "any", ignoreReadBeforeAssign: false },
	],
	"sort-keys": [
		"error",
		"asc",
		{ caseSensitive: true, minKeys: 2, natural: false },
	],
}

export default rules
