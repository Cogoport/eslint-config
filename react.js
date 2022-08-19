const commonConfig = require('./helpers/common-config');
const overided = require('./helpers/overided-rules');

module.exports = {
	extends: ['airbnb', 'airbnb/hooks'],

	...commonConfig,

	rules: {
		...overided.base,
		...overided.react,
	},
};
