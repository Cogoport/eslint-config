const commonConfig = require('./helpers/common-config');
const overided = require('./helpers/overided-rules');

module.exports = {
	parser  : '@typescript-eslint/parser',
	extends : ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
	plugins : ['@typescript-eslint'],

	...commonConfig,

	rules: {
		...overided.base,
		...overided.react,
		...overided.typescript,
	},
};
