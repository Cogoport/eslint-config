module.exports = {
	extends       : ['plugin:cypress/recommended'],
	parserOptions : { ecmaVersion: 2020 },
	settings      : {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias      : { '@': '../' },
				extensions : ['.js', '.ts', '.tsx'],
				packages   : ['packages/*'],
			},
		},
	},
};
