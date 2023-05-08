//export const prettierConfig = {
//	"tabWidth": 4,
//	"useTabs": true,
//	"semi": false,
//	"singleQuote": false,
//	"jsxSingleQuote": false,
//	"trailingComma": "none",
//	"bracketSpacing": true,
//	"bracketSameLine": true,
//	"arrowParens": "always",
//	"insertPragma": false,
//	"htmlWhitespaceSensitivity": "css"
//}
//
//export const eslintConfigESM = {
//	files: [
//		"**/*.js?(x)",
//		"**/*.ts?(x)"
//	],
//	ignores: [
//		"node_modules/**",
//		"doc/**",
//		"build/**",
//	],
//	rules: {
//		"import/extensions": "off",
//		"import/prefer-default-export": "off",
//		"camelcase": ["error", {
//			"properties": "always",
//			"ignoreDestructuring": true
//		}],
//		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
//		"padding-line-between-statements": [
//			"error",
//			{ blankLine: "always", prev: "*", next: ["export", "class", "function", "try", "if", "return"] },
//			{ blankLine: "always", prev: "block-like", next: "*" },
//			{ blankLine: "never", prev: "block-like", next: ["case", "default"] },
//			{ blankLine: "any", prev: "export", next: "export" }
//		],
//		"no-restricted-syntax": [
//			"error",
//			"functionexpression",
//			"functiondeclaration"
//		],
//		// jest
//		"jest/no-disabled-tests": "warn",
//		"jest/no-focused-tests": "warn",
//		"jest/no-identical-title": "warn",
//		"jest/prefer-to-have-length": "warn",
//		"jest/valid-expect": "warn",
//		// prettier
//		"prettier/prettier": [
//			"error",
//			{
//				"tabwidth": 4,
//				"usetabs": true,
//				"semi": false,
//				"singlequote": false,
//				"jsxsinglequote": false,
//				"trailingcomma": "none",
//				"bracketspacing": true,
//				"bracketsameline": true,
//				"arrowparens": "always",
//				"insertpragma": false,
//				"htmlwhitespacesensitivity": "css"
//			}
//		]
//	},
//}

module.exports = {
	ignorePatterns: [
		"node_modules/**",
		"doc/**",
		"build/**"
	],
	rules: {
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"camelcase": ["error", {
			"properties": "always",
			"ignoreDestructuring": true
		}],
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: ["export", "class", "function", "try", "if", "return"] },
			{ blankLine: "always", prev: "block-like", next: "*" },
			{ blankLine: "never", prev: "block-like", next: ["case", "default"] },
			{ blankLine: "any", prev: "export", next: "export" }
		],
		"no-restricted-syntax": [
			"error",
			"functionexpression",
			"functiondeclaration"
		],
		// Prettier
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
	overrides: [
		{
			// Typescript
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			files: ['./**/*.{ts,tsx}'],
		},
		{
			// Jest
			files: ["test/**"],
			plugins: ["jest"],
			extends: ["plugin:jest/recommended"],
			rules: {
				"jest/prefer-expect-assertions": "off",
				"jest/no-disabled-tests": "warn",
				"jest/no-focused-tests": "warn",
				"jest/no-identical-title": "warn",
				"jest/prefer-to-have-length": "warn",
				"jest/valid-expect": "warn",
			}
		}
	]
}