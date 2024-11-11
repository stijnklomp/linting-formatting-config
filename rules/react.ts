import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"react/display-name": "off",
	"react/jsx-curly-brace-presence": [
		"error",
		{ props: "never", children: "never" },
	],
}

export default rules
