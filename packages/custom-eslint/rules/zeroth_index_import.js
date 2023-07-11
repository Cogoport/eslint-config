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
				if (node?.init?.value === ARRAY_FIRST_ELEMENT && node?.parent?.kind === 'const') {
					ZERO_VALUE_VARIABLES.push(node?.id?.name);
				}
			},
			MemberExpression(node) {
				const { property = {} } = node || {};
				if (
					(property.type === 'Literal'
					&& property?.value === ARRAY_FIRST_ELEMENT
					&& sourceCode.getText(property) === '0')
					|| ZERO_VALUE_VARIABLES.includes(property.name)
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
