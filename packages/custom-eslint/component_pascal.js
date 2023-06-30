module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Enforce PascalCase for React component names and props default',
			category    : 'Best Practices',
			recommended : true,
		},
		fixable : 'code',
		schema  : [],
	},
	create(context) {
		return {
			ReturnStatement(node) {
				if (['JSXFragment', 'JSXElement'].includes(node.argument?.type) && node.parent?.parent?.id?.name) {
					const isPascal = /^([A-Z][a-z0-9]*)+$/.test(node.parent?.parent?.id?.name);

					if (!isPascal) {
						context.report({
							node,
							message : 'React component names should be in PascalCase.',
							loc     : node?.parent?.parent?.parent?.loc,
						});
					}
				}
			},
		};
	},
};
