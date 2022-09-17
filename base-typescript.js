const path = require('path');

const overided = require('./helpers/overided-rules');

module.exports = {
	extends       : ['airbnb-base', 'airbnb-typescript/base'],
	parser        : '@typescript-eslint/parser',
	parserOptions : { project: path.resolve(__dirname, 'tsconfig.json'), tsconfigRootDir: __dirname },
	plugins       : ['@typescript-eslint'],
	rules         : {
		...overided.base,
		...overided.typescript,
	},
};
