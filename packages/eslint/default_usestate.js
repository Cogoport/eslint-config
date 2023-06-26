// eslint-plugin-custom-rules/index.js

const ERROR_MESSAGE = 'Default value should be provided for useState';

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Default value should be provided for useState',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			VariableDeclarator(node) {
				if (
					node.init
                && node.init.callee
                && node.init.callee.name === 'useState'
				) {
					const [initialValue] = node.init.arguments;
					if (!initialValue || (initialValue.type === 'Literal' && initialValue.value === null)) {
						context.report({
							node,
							message: ERROR_MESSAGE,
						});
					}
				}
			},
		};
	},
};
