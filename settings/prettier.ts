export const prettierSettings = {
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	overrides: [
		{
			files: ["**/*.{yml,yaml}"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
	plugins: ["prettier-plugin-packagejson"],
	semi: false,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true,
}
