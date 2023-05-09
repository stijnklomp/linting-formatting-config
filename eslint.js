module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	ignorePatterns: [
		"node_modules/**",
		"doc/**",
		"build/**"
	],
	rules: {
		"prefer-arrow-callback": "error",
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"camelcase": ["error", {
			"properties": "always",
			"ignoreDestructuring": true
		}],
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"no-mixed-spaces-and-tabs": "off",
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
		"no-class-assign": "error",
		"no-confusing-arrow": "off",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": ["error", { "includeExports": false }],
		"no-this-before-super": "error",
		"no-var": "error",
		"prefer-arrow-callback": ["error", { "allowNamedFunctions": false, "allowUnboundThis": false }],
		"prefer-const": ["error", { "ignoreReadBeforeAssign": false, "destructuring": "any" }],
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
			files: ["**/*.{ts,tsx}"],
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking"
			],
			parserOptions: {
				project: "./tsconfig.json"
			},
			rules: {
				"@typescript-eslint/no-inferrable-types": "off",
				"no-mixed-spaces-and-tabs": "off",
				"@typescript-eslint/restrict-template-expressions": "off",
				"@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
				"prefer-arrow-callback": "error",
			}
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