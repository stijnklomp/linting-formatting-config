export default {
	rules: {
		"selector-class-pattern": [
			"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
			{
				message: (selector) =>
					`Expected class selector "${selector}" to be of BEM convention with camel case`,
			},
		],
		"selector-id-pattern": [
			"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
			{
				message: (selector) =>
					`Expected id selector "${selector}" to be of BEM convention with camel case`,
			},
		],
		"color-no-invalid-hex": true,
		"custom-property-pattern": [
			"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
			{
				message: (selector) =>
					`Expected design token "${selector}" to be of BEM convention with camel case`,
			},
		],
		"property-no-unknown": [
			true,
			{
				ignoreProperties: ["composes"],
			},
		],
		"scss/dollar-variable-pattern": [
			"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
			{
				message: (selector) =>
					`Expected dollar variable pattern "${selector}" to be of BEM convention with camel case`,
			},
		],
	},
};
