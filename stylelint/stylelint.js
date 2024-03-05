module.exports = {
	plugins: ["stylelint-scss"],
	extend: "stylelint-config-standard",
	overrides: [
		{
			files: ["**/*.scss"],
			customSyntax: "postcss-scss",
		},
	],
};
