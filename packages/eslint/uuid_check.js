const UUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Check for the presence of UUID and emit a warning',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			Literal(node) {
				if (typeof node.value === 'string' && UUID_REGEX.test(node.value)) {
					context.report({
						node,
						message: 'UUID detected. Please review and ensure its proper usage.',
					});
				}
			},
		};
	},
};
