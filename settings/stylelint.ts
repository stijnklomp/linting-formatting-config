import * as stylelintRules from "../rules/stylelint.js"

export const stylelintSettings = {
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-prettier-scss",
	],
	rules: stylelintRules,
}
