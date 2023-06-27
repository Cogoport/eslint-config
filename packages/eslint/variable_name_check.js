const VARIABLE_NAME_REGEX = /^[a-z]+(_[a-z]+)*$|^[a-z][a-zA-Z]*$/;

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Enforce camelCase or snake_case naming for variables declared within functional components',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			VariableDeclarator(node) {
				if (
					node.parent.kind === 'let'
                    && node.type === 'VariableDeclarator'
				) {
					const variableName = node.id.name;
					if (variableName
						&& !VARIABLE_NAME_REGEX.test(
							variableName,
						)
					) {
						context.report({
							node,
							message: 'Variable name within a functional component should be in camelCase or snake_case',
						});
					}
				}
			},
		};
	},
};
