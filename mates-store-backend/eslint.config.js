module.exports = [
	{
		files: ["**/*.js"],
		rules: {
			indent: ["error", "tab"],
			"linebreak-style": ["error", "windows"],
			quotes: ["error", "double"],
			semi: ["error", "never"],
			"no-unused-vars": "error",
			"no-dupe-else-if": "error",
			eqeqeq: "error",
			"no-console": "warn",
			"handle-callback-err": "error",
			"arrow-body-style": "error",
			"no-var": "error",
		},
	},
]
