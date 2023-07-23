const overrides = require('./overrides');

const MAXIMUM_LENGTH = 250;
module.exports = {
	extends       : ['airbnb', 'airbnb/hooks'],
	plugins       : ['custom-eslint'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overrides.base,
		...overrides.react,
		'max-lines-per-function'                    : ['error', MAXIMUM_LENGTH],
		'no-magic-numbers'                          : ['error', { ignoreDefaultValues: true }],
		'custom-eslint/variables-name-check'        : 'error',
		'custom-eslint/img-src-cdn'                 : 'warn',
		'custom-eslint/regex-check'                 : 'warn',
		'custom-eslint/nbsp-ensp-check'             : 'warn',
		'custom-eslint/is-empty-use-check'          : 'warn',
		'custom-eslint/uuid-check'                  : 'warn',
		'custom-eslint/email-check'                 : 'warn',
		'custom-eslint/cl-for-merging-styles-class' : 'warn',
		'custom-eslint/date-time-format-check'      : 'warn',
		'custom-eslint/check-element-role-button'   : 'warn',
		'custom-eslint/key-as-function'             : 'warn',
		'custom-eslint/key-in-for-each-map'         : 'warn',
		'custom-eslint/zeroth-index-import'         : 'warn',
		'custom-eslint/default-usestate'            : 'warn',
		'custom-eslint/hook-sequence'               : 'warn',
		'custom-eslint/variable-name-check'         : 'warn',
		'custom-eslint/component-pascal'            : 'warn',
		'custom-eslint/variable-value-jsx'          : 'warn',
		'custom-eslint/default-component-props'     : 'warn',
		// new
		'custom-eslint/import-from-react'          	: 'error',
	},
};
