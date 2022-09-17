module.exports = {
	settings: {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias      : { '@': './' },
				extensions : ['.js'],
				packages   : ['packages/*'],
			},
		},
	},
};
