const overrides = require('./overrides');

module.exports = {
	extends       : ['airbnb-base'],
	plugins : ['custom-eslint-rules'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overrides.base,
	},
};
