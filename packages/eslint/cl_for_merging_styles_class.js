const MIN_LENGTH_OF_EXP_TO_USE_CL = 2;

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Check for the cl if more than one styles class is used in className',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			JSXAttribute(node) {
				if (node.name.name === 'className' && node?.value?.expression?.type === 'TemplateLiteral'
                    && node?.value?.expression?.expressions?.length >= MIN_LENGTH_OF_EXP_TO_USE_CL
				) {
					context.report({
						node,
						message: 'use cl from @cogoport/components to merge styles class',
					});
				}
			},
		};
	},
};
