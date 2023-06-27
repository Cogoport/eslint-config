module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Disallow react hooks in conditional statements',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			CallExpression(node) {
				const { callee = {} } = node || {};
				const { name = '' } = callee || {};
				if (name.startsWith('use')) {
					const ancestors = context.getAncestors();
					const isCondition = ancestors.some((ancestor) => (
						ancestor.type === 'IfStatement' || ancestor.type === 'FunctionDeclaration'
					));
					if (isCondition) {
						context.report({
							node,
							message: 'Do not use react hooks in conditional statements',
						});
					}
				}
			},
		};
	},
};
