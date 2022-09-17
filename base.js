const overided = require('./helpers/overided-rules');

module.exports = {
	extends       : ['airbnb-base'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overided.base,
	},
};
