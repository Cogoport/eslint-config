const overrides = require('./overrides');

const MAXIMUM_LENGTH = 250;
module.exports = {
	extends       : ['airbnb', 'airbnb/hooks'],
	plugins       : ['custom-lint'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overrides.base,
		...overrides.react,
		'max-lines-per-function'                  : ['error', MAXIMUM_LENGTH],
		'no-magic-numbers'                        : ['error', { ignoreDefaultValues: true }],
		'custom-lint/custom-rules-matching'       : 'error',
		'custom-lint/img-src-cdn'                 : 'warn',
		'custom-lint/regex-check'                 : 'warn',
		'custom-lint/nbsp-ensp-check'             : 'warn',
		'custom-lint/is-empty-use-check'          : 'warn',
		'custom-lint/uuid-check'                  : 'warn',
		'custom-lint/email-check'                 : 'warn',
		'custom-lint/cl-for-merging-styles-class' : 'warn',
		'custom-lint/date-time-format-check'      : 'warn',
		'custom-lint/check-element-role-button'   : 'warn',
		'custom-lint/key-as-function'             : 'warn',
		'custom-lint/key-in-for-each-map'         : 'warn',
		'custom-lint/zeroth-index-import'         : 'warn',
		'custom-lint/default-usestate'            : 'warn',
		'custom-lint/hook-sequence'               : 'warn',
		'custom-lint/variable-name-check'         : 'warn',
		'custom-lint/component-pascal'            : 'warn',
		'custom-lint/variable-value-jsx'          : 'warn',
		'custom-lint/default-component-props'     : 'warn',
	},
};
