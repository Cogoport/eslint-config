const EMPTY_ARRAY_LENGTH = 0;
const NON_EMPTY_ARRAY_MIN_LENGTH = 1;

const isChainExpression = (type) => type === 'ChainExpression';

const handleOperatorAndValueCobinationCheck = (operator, value) => {
	switch (operator) {
		case '===':
		case '>':
			if (value === EMPTY_ARRAY_LENGTH) return true;
			return false;
		case '>=':
			if (value === NON_EMPTY_ARRAY_MIN_LENGTH) return true;
			return false;
		default: return false;
	}
};

module.exports = {
	rules: {
		'is-empty-use-check': {
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
						const isChain = isChainExpression(node?.left?.type);

						const leftPropertyName = isChain
							? node?.left?.expression?.property?.name : node?.left?.property?.name;

						if (leftPropertyName === 'length' && handleOperatorAndValueCobinationCheck(
							node.operator,
							node.right.value,
						)) {
							context.report({
								node,
								message: 'Use isEmpty instead of comparing variable length directly',

							});
						}
					},
				};
			},
		},
	},
};
