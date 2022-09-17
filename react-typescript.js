const path = require('path');

const overided = require('./helpers/overided-rules');

module.exports = {
	extends       : ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
	parser        : '@typescript-eslint/parser',
	parserOptions : { project: path.resolve(process.cwd(), 'tsconfig.json'), tsconfigRootDir: __dirname },
	plugins       : ['@typescript-eslint'],
	rules         : {
		...overided.base,
		...overided.react,
		...overided.typescript,
	},
};
