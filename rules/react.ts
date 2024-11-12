import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"react/display-name": "off",
	"react/jsx-curly-brace-presence": [
		"error",
		{ children: "never", props: "never" },
	],
}

export default rules
