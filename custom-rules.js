const overrides = require('./overrides');

const MAXIMUM_LENGTH = 250;
module.exports = {
	extends        : ['airbnb', 'airbnb/hooks'],
	plugins        : ['custom-rules'],
	parserOptions  : { ecmaVersion: 2020 },
	ignorePatterns : ['**/globalization/*.js'],
	rules          : {
		...overrides.base,
		...overrides.react,
		'max-lines-per-function'                   : ['error', MAXIMUM_LENGTH],
		'no-magic-numbers'                         : ['error', { ignoreDefaultValues: true }],
		'custom-rules/custom-rules-matching'       : 'error',
		'custom-rules/img-src-cdn'                 : 'warn',
		'custom-rules/regex-check'                 : 'warn',
		'custom-rules/nbsp-ensp-check'             : 'warn',
		'custom-rules/is-empty-use-check'          : 'warn',
		'custom-rules/uuid-check'                  : 'warn',
		'custom-rules/email-check'                 : 'warn',
		'custom-rules/cl-for-merging-styles-class' : 'warn',
		'custom-rules/date-time-format-check'      : 'warn',
		'custom-rules/check-element-role-button'   : 'warn',
		'custom-rules/key-as-function'             : 'warn',
		'custom-rules/key-in-for-each'             : 'warn',
		'custom-rules/zeroth-index-import'         : 'warn',
		'custom-rules/component-pascal'            : 'warn',
	},
};
