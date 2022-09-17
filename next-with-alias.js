const overided = require('./helpers/overided-rules');

module.exports = {
	extends       : ['airbnb', 'airbnb/hooks'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		...overided.base,
		...overided.react,
	},
	settings: {
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias      : { '@': './' },
				extensions : ['.js', '.ts', '.tsx'],
				packages   : ['packages/*'],
			},
		},
	},
};
