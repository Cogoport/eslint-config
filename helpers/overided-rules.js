const base = {
	// js
	indent                 : ['error', 'tab'],
	'no-tabs'              : 'off',
	'max-len'              : ['error', 120],
	'no-use-before-define' : 'off',
	'key-spacing'          : ['error', {
		align: {
			on          : 'colon',
			beforeColon : true,
			afterColon  : true,
			mode        : 'strict',
		},
	}],
	'object-curly-newline'  : ['error'],
	'no-restricted-exports' : 'off',

	// import
	'import/no-extraneous-dependencies' : 'off',
	'import/prefer-default-export'      : 'off',
	'import/order'                      : ['error',
		{
			groups             : ['builtin', 'external', 'parent', 'sibling', 'index'],
			'newlines-between' : 'always',
			alphabetize        : {
				order           : 'asc',
				caseInsensitive : true,
			},
		},
	],
};

const react = {
	// react
	'react/jsx-indent'                    : ['error', 'tab'],
	'react/jsx-filename-extension'        : 'off',
	'react/prop-types'                    : 'off',
	'react/jsx-props-no-spreading'        : 'off',
	'react/forbid-prop-types'             : 'off',
	'react/react-in-jsx-scope'            : 'off',
	'react/no-unstable-nested-components' : 'off',
	// jsx-a11y
	'jsx-a11y/media-has-caption'          : 'off',
};

const css = {};

const overided = {
	base,
	react,
	css,
};

module.exports = overided;
