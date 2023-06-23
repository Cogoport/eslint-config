const DEFAULT_ELEMENT = 0;

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Enforce importing image src from global constants if it includes a specific URL',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create: (context) => ({
		ImportDeclaration(node) {
			if (node.specifiers[0]) {
				const { imported = {} } = node.specifiers[0];
				console.log('imported', imported);
			}
		},
		// VariableDeclaration(node) {
		// 	const { init = {}, id = {} } = node?.declarations[DEFAULT_ELEMENT] || {};

		// 	if (node?.kind === 'const') {
		// 		const { name = '' } = id;

		// 		const { type = undefined, properties = [], elements = [] } = init || {};

		// 		if (type === 'Literal') {
		// 			if (!isValidName(name, node.kind)) {
		// 				context.report({
		// 					node,
		// 					message: `Variable name ${name} should be in UPPER_CASE`,
		// 				});
		// 			}
		// 		}

		// 		if (type === 'ObjectExpression') {
		// 			const objectNamingCondition = properties.find((item) => item?.value?.type !== 'Literal');
		// 			if (!objectNamingCondition) {
		// 				if (!isValidName(name, node.kind)) {
		// 					context.report({
		// 						node,
		// 						message: `Variable name ${name} should be in UPPER_CASE`,
		// 					});
		// 				}
		// 			}
		// 		}
		// 		if (type === 'ArrayExpression') {
		// 			const arrayNamingCondition = elements.find((item) => item?.value?.type !== 'Literal');
		// 			if (!arrayNamingCondition) {
		// 				if (!isValidName(name, node.kind)) {
		// 					context.report({
		// 						node,
		// 						message: `Variable name ${name} should be in UPPER_CASE`,
		// 					});
		// 				}
		// 			}
		// 		}
		// 	}
		// },
	}),
};
