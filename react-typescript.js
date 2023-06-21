const path = require('path');

const overrides = require('./overrides');

module.exports = {
	extends       : ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
	parser        : '@typescript-eslint/parser',
	parserOptions : { project: path.resolve(process.cwd(), 'tsconfig.json'), tsconfigRootDir: __dirname },
	plugins       : ['@typescript-eslint', 'img-src-cdn'],
	rules         : {
		...overrides.base,
		...overrides.react,
		...overrides.typescript,
	},
};
