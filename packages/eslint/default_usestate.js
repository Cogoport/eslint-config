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
			CallExpression(node) {
				if (node.callee.name === 'useState'
				) {
					const [initialValue] = node.arguments;
					if (!initialValue) {
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
