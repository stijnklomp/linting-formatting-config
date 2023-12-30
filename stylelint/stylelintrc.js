module.exports = {
	plugins: ["stylelint-scss"],
	extend: "stylelint-config-standard",
	overrides: [
		{
		  files: ["**/*.scss"],
		  customSyntax: "postcss-scss"
		}
	],
	rules: {
		"selector-class-pattern": [
			"^[a-z][a-zA-Z]*(?:(?:_{2}|-{2})[a-z][a-zA-Z]*)*$",
			{
				message: (selector) => `Expected class selector "${selector}" to be of BEM convention`
			}
		],
		"selector-id-pattern": [
			"^[a-z][a-zA-Z]*(?:(?:_{2}|-{2})[a-z][a-zA-Z]*)*$",
			{
				message: (selector) => `Expected id selector "${selector}" to be of BEM convention`
			}
		],
		"color-no-invalid-hex": true,
		"custom-property-pattern": [
			"^[a-z][a-zA-Z]*(?:(?:_{2}|-{2})[a-z][a-zA-Z]*)*$",
			{
				message: (selector) => `Expected design token "${selector}" to be of BEM convention`
			}
		],
		"property-no-unknown": [true, {
			"ignoreProperties": ["composes"]
		}],
		"scss/dollar-variable-pattern": [
			"^[a-z][a-zA-Z]*(?:(?:_{2}|-{2})[a-z][a-zA-Z]*)*$",
			{
				message: (selector) => `Expected dollar variable pattern "${selector}" to be of BEM convention`
			}
		]
	}
}