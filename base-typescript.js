const overided = require('./helpers/overided-rules');

module.exports = {
	extends       : ['airbnb-base', 'airbnb-typescript/base'],
	parser        : '@typescript-eslint/parser',
	parserOptions : { project: './tsconfig.json', tsconfigRootDir: __dirname },
	plugins       : ['@typescript-eslint'],
	rules         : {
		...overided.base,
		...overided.typescript,
	},
};
