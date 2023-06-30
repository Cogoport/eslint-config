module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Disallow the usage of non-breaking space or en space',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			JSXText(node) {
				const hasNonBreakingSpace = (/\u00A0|\u2002/g).test(node.value);

				if (hasNonBreakingSpace) {
					context.report({
						node,
						message: 'Non-breaking space (nbsp;) is not allowed. Use string literal (``) instead.',
					});
				}
			},
		};
	},

};
