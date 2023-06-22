module.exports = {

	meta: {
		type : 'warn',
		docs : {
			description : 'Disallow regular expression patterns',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			Literal(node) {
				if (node.regex) {
					context.report({
						node,
						message: 'Move regex pattern to global geo contants and use it from their',
					});
				}
			},
		};
	},
};
