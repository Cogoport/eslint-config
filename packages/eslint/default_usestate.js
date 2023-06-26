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
				// console.log(node.callee.name);
				if (node.callee.name === 'useState'
				) {
					const [initialValue] = node.arguments;
					if (!initialValue || (initialValue.length === 0)) {
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