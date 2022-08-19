const commonConfig = require('./helpers/common-config');
const overided = require('./helpers/overided-rules');

module.exports = {
	extends: ['airbnb-base'],

	...commonConfig,

	rules: {
		...overided.base,
	},
};
