export default {
	root: true,
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
		// Add any additional rules or overrides here
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