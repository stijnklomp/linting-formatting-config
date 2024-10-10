export const configPrettier = [
	{
		tabWidth: 4,
		useTabs: true,
		semi: false,
		singleQuote: false,
		jsxSingleQuote: false,
		trailingComma: "all",
		bracketSpacing: true,
		bracketSameLine: true,
		arrowParens: "always",
		insertPragma: false,
		htmlWhitespaceSensitivity: "css",
		overrides: [
			{
				files: ["**/*.{yml,yaml}"],
				options: {
					useTabs: false,
					tabWidth: 2,
				},
			},
		],
	},
];
