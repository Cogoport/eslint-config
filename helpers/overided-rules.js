const base = {
	// js
	camelcase               : 'off',
	'no-tabs'               : 'off',
	'no-use-before-define'  : 'off',
	'no-restricted-exports' : 'off',
	'no-underscore-dangle'  : ['error'],
	'object-curly-newline'  : ['error'],
	indent                  : ['error', 'tab'],
	'max-len'               : ['error', 120],
	'key-spacing'           : ['error', {
		align: {
			on          : 'colon',
			beforeColon : true,
			afterColon  : true,
			mode        : 'strict',
		},
	}],

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
	'react/jsx-filename-extension'        : 'off',
	'react/prop-types'                    : 'off',
	'react/jsx-props-no-spreading'        : 'off',
	'react/forbid-prop-types'             : 'off',
	'react/react-in-jsx-scope'            : 'off',
	'react/no-unstable-nested-components' : 'off',
	'react/jsx-indent-props'              : ['error', 'tab'],
	'react/jsx-indent'                    : ['error', 'tab', {
		checkAttributes          : true,
		indentLogicalExpressions : true,
	}],
	// jsx-a11y
	'jsx-a11y/media-has-caption': 'off',
};

const css = {};

const overided = {
	base,
	react,
	css,
};

module.exports = overided;
