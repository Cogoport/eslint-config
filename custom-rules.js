function isValidName(name, kind) {
	if (kind === 'const') {
		return /^[A-Z][A-Z0-9_]*$/.test(name);
	}
	return /^[a-z][A-Za-z0-9_]*$/.test(name);
}

const DEFAULT_ELEMENT = 0;
const MAXIMUM_LENGTH = 250;

module.exports = {
	extends       : ['airbnb', 'airbnb/hooks'],
	parserOptions : { ecmaVersion: 2020 },
	rules         : {
		'max-lines-per-function' : ['error', MAXIMUM_LENGTH],
		'no-magic-numbers'       : ['error', { ignoreDefaultValues: true }],
		// 'custom-eslint-rules/naming-convention' : 'error',
		'naming-convention'      : {
			meta: {
				type           : 'problem',
				hasSuggestions : true,
				fixable        : true,
			},
			create: (context) => ({
				VariableDeclaration(node) {
					const { init = {}, id = {} } = node?.declarations[DEFAULT_ELEMENT] || {};

					const { name = '' } = id;

					const { type = '', properties = [], elements = [] } = init;

					if (type === 'Literal') {
						if (!isValidName(name, node.kind)) {
							context.report({
								node,
								message: `Variable name ${name} should be in UPPER_CASE`,
							});
						}
					}

					if (type === 'ObjectExpression') {
						const objectNamingCondition = properties.find((item) => item?.value?.type !== 'Literal');
						if (!objectNamingCondition) {
							if (!isValidName(name, node.kind)) {
								context.report({
									node,
									message: `Variable name ${name} should be in UPPER_CASE`,
								});
							}
						}
					}
					if (type === 'ArrayExpression') {
						const arrayNamingCondition = elements.find((item) => item?.value?.type !== 'Literal');
						if (!arrayNamingCondition) {
							if (!isValidName(name, node.kind)) {
								context.report({
									node,
									message: `Variable name ${name} should be in UPPER_CASE`,
								});
							}
						}
					}
				},
			}),
		},
	},
};
