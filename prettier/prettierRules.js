module.exports = {
	overrides: [
		{
			"prettier/prettier": [
				"error",
				{
					tabwidth: 4,
					usetabs: true,
					semi: false,
					singlequote: false,
					jsxsinglequote: false,
					trailingcomma: "all",
					bracketspacing: true,
					bracketsameline: true,
					arrowparens: "always",
					insertpragma: false,
					htmlwhitespacesensitivity: "css",
				},
			],
		},
	],
};
