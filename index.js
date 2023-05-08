export const prettierConfig = {
	"tabWidth": 4,
	"useTabs": true,
	"semi": false,
	"singleQuote": false,
	"jsxSingleQuote": false,
	"trailingComma": "none",
	"bracketSpacing": true,
	"bracketSameLine": true,
	"arrowParens": "always",
	"insertPragma": false,
	"htmlWhitespaceSensitivity": "css"
}

export const eslintConfig = {
	files: [
		"**/*.js?(x)",
		"**/*.ts?(x)"
	],
	ignores: [
		"node_modules/",
		"doc/",
		"build/",
	],
	rules: {
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"camelcase": ["error", {
			"properties": "always",
			"ignoredestructuring": true
		}],
		"no-unused-vars": ["error", { ignorerestsiblings: true }],
		"padding-line-between-statements": [
			"error",
			{ blankline: "always", prev: "*", next: ["export", "class", "function", "try", "if", "return"] },
			{ blankline: "always", prev: "block-like", next: "*" },
			{ blankline: "never", prev: "block-like", next: ["case", "default"] },
			{ blankline: "any", prev: "export", next: "export" }
		],
		"no-restricted-syntax": [
			"error",
			"functionexpression",
			"functiondeclaration"
		],
		// jest
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "warn",
		"jest/no-identical-title": "warn",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "warn",
		// prettier
		"prettier/prettier": [
			"error",
			{
				"tabwidth": 4,
				"usetabs": true,
				"semi": false,
				"singlequote": false,
				"jsxsinglequote": false,
				"trailingcomma": "none",
				"bracketspacing": true,
				"bracketsameline": true,
				"arrowparens": "always",
				"insertpragma": false,
				"htmlwhitespacesensitivity": "css"
			}
		]
	},
}