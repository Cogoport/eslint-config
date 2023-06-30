module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Checking if element is converted to button',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			JSXAttribute(node) {
				if (node?.name?.name === 'role' && node?.value?.value === 'button') {
					context.report({
						node,
						message: 'Conversion of element to custom-button is not allowed',
					});
				}
			},

		};
	},
};
