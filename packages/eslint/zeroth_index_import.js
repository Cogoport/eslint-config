const ARRAY_FIRST_ELEMENT = 0;

const ERROR_MESSAGE = 'Import the zeroth index from global constants instead of declaring it in the file';

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Enforce importing the zeroth index from global constants if it is an array or string',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		const sourceCode = context.getSourceCode();

		return {
			MemberExpression(node) {
				if (
					node.property.type === 'Literal'
					&& node.property.value === ARRAY_FIRST_ELEMENT
					&& sourceCode.getText(node.property) === '0'
				) {
					context.report({
						node,
						message: ERROR_MESSAGE,
					});
				}
			},
		};
	},
};
