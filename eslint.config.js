export default [
	{
		files: [
			"*.js",
			"*.ts"
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
]


//module.exports = [{
	//env: {
	//	commonjs: true,
	//	es6: true,
	//	node: true
	//},
	//parser: "@typescript-eslint/parser",
	//parserOptions: {
	//	ecmaVersion: 2021,
	//	sourceType: "module",
	//	project: ["./tsconfig.eslint.json"]
	//},
	//plugins: [
	//	"@typescript-eslint",
	//	"react-hooks"
	//],
	//extends: [
	//	"airbnb-base",
	//	"airbnb-typescript/base",
	//	"plugin:import/errors",
	//	"plugin:react/recommended",
	//	"plugin:jsx-a11y/recommended",
	//	"prettier"
	//],
	//rules: {
	//	"import/extensions": "off",
	//	"import/prefer-default-export": "off",
	//	"camelcase": ["error", {
	//		"properties": "always",
	//		"ignoredestructuring": true
	//	}],
	//	"no-unused-vars": ["error", { ignorerestsiblings: true }],
	//	"padding-line-between-statements": [
	//		"error",
	//		{ blankline: "always", prev: "*", next: ["export", "class", "function", "try", "if", "return"] },
	//		{ blankline: "always", prev: "block-like", next: "*" },
	//		{ blankline: "never", prev: "block-like", next: ["case", "default"] },
	//		{ blankline: "any", prev: "export", next: "export" }
	//	],
	//	"no-restricted-syntax": [
	//		"error",
	//		"functionexpression",
	//		"functiondeclaration"
	//	],
	//	// jest
	//	"jest/no-disabled-tests": "warn",
	//	"jest/no-focused-tests": "warn",
	//	"jest/no-identical-title": "warn",
	//	"jest/prefer-to-have-length": "warn",
	//	"jest/valid-expect": "warn",
	//	// prettier
	//	"prettier/prettier": [
	//		"error",
	//		{
	//			"tabwidth": 4,
	//			"usetabs": true,
	//			"semi": false,
	//			"singlequote": false,
	//			"jsxsinglequote": false,
	//			"trailingcomma": "none",
	//			"bracketspacing": true,
	//			"bracketsameline": true,
	//			"arrowparens": "always",
	//			"insertpragma": false,
	//			"htmlwhitespacesensitivity": "css"
	//		}
	//	]
	//},
	//overrides: [
	//	{
	//		files: ["**/*.ts"],
	//		parserOptions: {
	//			project: ["./tsconfig.json"],
	//		},
	//		extends: [
	//			"plugin:@typescript-eslint/recommended",
	//			"plugin:@typescript-eslint/recommended-requiring-type-checking",
	//		],
	//		rules: {
	//			// Add any additional TypeScript-specific rules or overrides here
	//		}
	//	}
	//],
	//ignorePatterns: ["doc/*", "node_modules/*"],
//}]