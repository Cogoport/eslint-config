const ARRAY_FIRST_ELEMENT = 0;

const ERROR_MESSAGE = 'Import the zeroth index from global constants instead of declaring it in the file';

const ZERO_VALUE_VARIABLES = [];

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description:
                'Enforce importing the zeroth index from global constants if it is an array or string',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		const sourceCode = context.getSourceCode();

		return {
			VariableDeclarator(node) {
				if (node.init.value === ARRAY_FIRST_ELEMENT) {
					ZERO_VALUE_VARIABLES.push(node.id.name);
				}
			},
			MemberExpression(node) {
				if (
					(node.property.type === 'Literal'
					&& node.property.value === ARRAY_FIRST_ELEMENT
					&& sourceCode.getText(node.property) === '0')
					|| ZERO_VALUE_VARIABLES.includes(node.property.name)
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
