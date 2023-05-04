module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: ["airbnb-base", "plugin:prettier/recommended"],
	overrides: [],

	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	plugins: ["prettier"],

	rules: {
		"no-use-before-define": [
			"error",
			{
				functions: false,
				classes: false,
			},
		],
		"prettier/prettier": [
			"error",
			{
				printWidth: 120,
				bracketSameLine: true,
				useTabs: true,
				arrowParens: "avoid",
				trailingComma: "es5",
				endOfLine: "auto",
			},
		],
		"import/prefer-default-export": "off",
		"no-underscore-dangle": 0,
		"no-console": [
			"error",
			{
				allow: ["warn", "error"],
			},
		],

		"no-param-reassign": 0,
		"no-unused-expressions": [
			"error",
			{
				allowTernary: true,
			},
		],
		"arrow-parens": 0,
		"no-confusing-arrow": 0,
		"no-cap": 0,
		"arrow-body-style": 0,
	},
};
