module.exports = {
	overrides: [
		{
			files: ["**/*.{ts,tsx}"],
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			parserOptions: {
				project: "./tsconfig.json",
			},
			rules: {
				"@typescript-eslint/no-inferrable-types": "off",
				"no-mixed-spaces-and-tabs": "off",
				"@typescript-eslint/restrict-template-expressions": "off",
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": [
					"error",
					{ ignoreRestSiblings: true },
				],
				"prefer-arrow-callback": [
					"error",
					{ allowNamedFunctions: false, allowUnboundThis: false },
				],
				"@typescript-eslint/no-explicit-any": "warn",
			},
		},
	],
};
