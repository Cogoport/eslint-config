const isNodeTypeCallExpression = (type) => type === 'CallExpression';

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Disallow function as key',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			JSXAttribute(node) {
				const attr_name = node?.name?.name;
				const value_type = node?.value?.expression?.type;

				if (attr_name === 'key' && isNodeTypeCallExpression(value_type)) {
					context.report({
						node,
						message: 'Use of function as key is restricted',
					});
				}
			},

		};
	},
};
