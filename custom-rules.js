const overrides = require('./overrides');

const MAXIMUM_LENGTH = 250;
module.exports = {
	extends       : ['airbnb', 'airbnb/hooks'],
	plugins       : ['custom-rules'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overrides.base,
		...overrides.react,
		'max-lines-per-function'             : ['error', MAXIMUM_LENGTH],
		'no-magic-numbers'                   : ['error', { ignoreDefaultValues: true }],
		'custom-rules/custom-rules-matching' : 'error',
	},
};
