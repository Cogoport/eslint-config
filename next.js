const commonConfig = require('./helpers/common-config');
const overided = require('./helpers/overided-rules');

module.exports = {
	extends : ['airbnb', 'airbnb/hooks', 'plugin:css/standard'],
	plugins : ['css'],

	...commonConfig,

	rules: {
		...overided.base,
		...overided.react,
	},
};
