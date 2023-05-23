const overrides = require('./overrides');

module.exports = {
	extends       : ['airbnb-base'],
	plugins    	  : ['eslint-plugin-custom-eslint-rules'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overrides.cogoAdmin,
	},
};
