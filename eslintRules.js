module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	ignorePatterns: [
		"node_modules/**",
		"doc/**",
		"build/**",
		"dist/**",
		"*.css",
		"*.sccs",
	],
	overrides: [
		{
			files: ["*.json", "*.json5", "*.jsonc"],
			parser: "jsonc-eslint-parser",
			rules: {
				"@typescript-eslint/no-unnecessary-condition": "off",
			},
		},
	],
	rules: {
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		camelcase: [
			"error",
			{
				properties: "always",
				ignoreDestructuring: true,
			},
		],
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"no-mixed-spaces-and-tabs": "off",
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
		"no-class-assign": "error",
		"no-confusing-arrow": "off",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": ["error", { includeExports: false }],
		"no-this-before-super": "error",
		"no-var": "error",
		"prefer-arrow-callback": [
			"error",
			{ allowNamedFunctions: false, allowUnboundThis: false },
		],
		"prefer-const": [
			"error",
			{ ignoreReadBeforeAssign: false, destructuring: "any" },
		],
		"@typescript-eslint/no-unnecessary-condition": "error",
	},
};
