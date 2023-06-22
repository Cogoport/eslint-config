const GLOBAL_CONSTANT_FILE_PATH = 'globalization/constants/globals.js';

module.exports = {
	rules: {
		'regex-check': {
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
				if (context.getFilename().includes(GLOBAL_CONSTANT_FILE_PATH)) {
					return {};
				}
				return {
					Literal(node) {
						if (node.regex) {
							context.report({
								node,
								message: 'Move regex pattern to global contants and use it from their',
							});
						}
					},
				};
			},
		},
	},
};
