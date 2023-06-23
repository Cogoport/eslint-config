const VN_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const IN_EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const EMAIL_REGEX = [VN_EMAIL_REGEX, IN_EMAIL_REGEX];

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Check for the presence of an email address and emit a warning',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},

	create(context) {
		return {
			Literal(node) {
				if (typeof node.value === 'string' && EMAIL_REGEX.some((e) => e.test(node.value))) {
					context.report({
						node,
						message: 'Email address: "{{email}}" detected.'
						+ ' Move it to geo constants and use it from their.',
						data: {
							email: node.value,
						},
					});
				}
			},
		};
	},
};
