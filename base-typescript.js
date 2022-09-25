const path = require('path');

const overrides = require('./overrides');

module.exports = {
	extends       : ['airbnb-base', 'airbnb-typescript/base'],
	parser        : '@typescript-eslint/parser',
	parserOptions : { project: path.resolve(process.cwd(), 'tsconfig.json'), tsconfigRootDir: __dirname },
	plugins       : ['@typescript-eslint'],
	rules         : {
		...overrides.base,
		...overrides.typescript,
	},
};
