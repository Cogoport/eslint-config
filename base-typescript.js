const commonConfig = require('./helpers/common-config');
const overided = require('./helpers/overided-rules');

module.exports = {
	parser  : '@typescript-eslint/parser',
	extends : ['airbnb-base', 'airbnb-typescript/base'],
	plugins : ['@typescript-eslint'],

	...commonConfig,

	rules: {
		...overided.base,
		...overided.typescript,
	},
};
