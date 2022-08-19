module.exports = {
    // js
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
    'object-curly-newline': ['error'],
    'no-restricted-exports': 'off',

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
      }
    ],
}