export default {
	"@typescript-eslint/no-inferrable-types": "off",
	"no-mixed-spaces-and-tabs": "off",
	"@typescript-eslint/restrict-template-expressions": "off",
	"no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": [
		"error",
		{ ignoreRestSiblings: true },
	],
	"prefer-arrow-callback": [
		"error",
		{ allowNamedFunctions: false, allowUnboundThis: false },
	],
	"@typescript-eslint/no-explicit-any": "warn",
};
