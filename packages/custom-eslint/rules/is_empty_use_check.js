const ARRAY_FIRST_ELEMENT = 0;
const EMPTY_ARRAY_LENGTH = 0;
const NON_EMPTY_ARRAY_MIN_LENGTH = 1;

const getValueFromNode = (node, scope) => {
	if (node.type === 'Identifier') {
		const variable = scope?.variables?.find((v) => v.name === node?.name);

		if (variable && variable.defs[ARRAY_FIRST_ELEMENT]?.node?.init) {
			return getValueFromNode(variable.defs[ARRAY_FIRST_ELEMENT]?.node?.init, scope);
		}
	} else if (node.type === 'Literal') {
		return node.value;
	}

	return undefined;
};

const handleOperatorAndValueCombinationCheck = (operator, valueNode, scope) => {
	const value = getValueFromNode(valueNode, scope?.upper);

	switch (operator) {
		case '===':
		case '>':
			return value === EMPTY_ARRAY_LENGTH;
		case '>=':
			return value === NON_EMPTY_ARRAY_MIN_LENGTH;
		default:
			return false;
	}
};

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Enforce the use of isEmpty when checking variable length',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			BinaryExpression(node) {
				const leftPropertyName = node?.left?.type === 'ChainExpression'
					? node?.left?.expression?.property?.name : node?.left?.property?.name;

				if (leftPropertyName === 'length' && handleOperatorAndValueCombinationCheck(
					node.operator,
					node.right,
					context.getScope(),
				)) {
					context.report({
						node,
						message: 'Use isEmpty instead of comparing variable length directly',
					});
				}
			},
		};
	},
};
