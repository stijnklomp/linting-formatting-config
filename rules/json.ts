import { ConfigRules } from "../helper"

const rules: ConfigRules = {
	"sort-keys": [
		"error",
		"asc",
		{
			caseSensitive: true,
			minKeys: 2,
			natural: false,
		},
	],
}

export default rules
