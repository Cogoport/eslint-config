const isNodeTypeJSX = (type) => ['JSXFragment', 'JSXElement'].includes(type);
const isNodeTypeIdentifier = (type) => type === 'Identifier';

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Ensuring variable value is not JSX',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			VariableDeclarator(node) {
				if (isNodeTypeJSX(node?.init?.type) && isNodeTypeIdentifier(node?.id?.type)) {
					context.report({
						node,
						message: 'Convert this variable into component',
					});
				}
			},
		};
	},
};
