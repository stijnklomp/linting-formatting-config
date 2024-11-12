import { Config } from "stylelint"

/* eslint-disable @typescript-eslint/restrict-template-expressions */
const rules: Config["rules"] = {
	"color-no-invalid-hex": true,
	"custom-property-pattern": [
		"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
		{
			message: (selector: unknown) =>
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
			message: (selector: unknown) =>
				`Expected dollar variable pattern "${selector}" to be of BEM convention with camel case`,
		},
	],
	"selector-class-pattern": [
		"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
		{
			message: (selector: unknown) =>
				`Expected class selector "${selector}" to be of BEM convention with camel case`,
		},
	],
	"selector-id-pattern": [
		"^[a-z0-9][a-zA-Z0-9]*(?:(?:_{2}|-{2})[a-z0-9][a-zA-Z0-9]*)*$",
		{
			message: (selector: unknown) =>
				`Expected id selector "${selector}" to be of BEM convention with camel case`,
		},
	],
}

export default rules
