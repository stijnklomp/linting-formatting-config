import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"no-mixed-spaces-and-tabs": "error",
	"no-confusing-arrow": "off",
	"no-duplicate-imports": "error",
	"no-this-before-super": "error",
	"no-var": "error",
	"prefer-const": [
		"error",
		{ ignoreReadBeforeAssign: false, destructuring: "any" },
	],
	"prefer-arrow-callback": [
		"error",
		{ allowNamedFunctions: false, allowUnboundThis: false },
	],
	"padding-line-between-statements": [
		"error",
		{
			blankLine: "always",
			prev: "*",
			next: ["export", "class", "function", "try", "if", "return"],
		},
		{ blankLine: "always", prev: "block-like", next: "*" },
		{
			blankLine: "never",
			prev: "block-like",
			next: ["case", "default"],
		},
		{ blankLine: "any", prev: "export", next: "export" },
	],
	"no-console": ["warn", { allow: ["warn", "error"] }],
	"no-restricted-syntax": [
		"error",
		{
			selector:
				"CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
			message: "Unexpected property on console object was called",
		},
		"functionexpression",
		"functiondeclaration",
	],
}

export default rules
