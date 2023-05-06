export default {
	root: true,
	env: {
		commonjs: false,
		es6: true,
		node: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2021,
			sourceType: "module",
			project: ["./tsconfig.eslint.json"]
	},
	plugins: [
		"@typescript-eslint",
		"react-hooks"
	],
	extends: [
		"airbnb-base",
		"airbnb-typescript/base",
		"plugin:import/errors",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"prettier/react"
	],
	rules: {
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		camelcase: ["error", {
			properties: "always",
			ignoreDestructuring: true
		}],
		"arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
		"comma-dangle": ["error", "never"],
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"object-curly-newline": ["error", {
			consistent: true
		}],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: ["export", "class", "function", "try", "if", "return"] },
			{ blankLine: "always", prev: "block-like", next: "*" },
			{ blankLine: "never", prev: "block-like", next: ["case", "default"] },
			{ blankLine: "any", prev: "export", next: "export" }
		],
		"no-restricted-syntax": [
			"error",
			"FunctionExpression",
			"FunctionDeclaration"
		],
		// Jest
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "warn",
		"jest/no-identical-title": "warn",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "warn"
	},
	overrides: [
		{
			files: ["**/*.ts"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			rules: {
				// Add any additional TypeScript-specific rules or overrides here
			}
		}
	]
}