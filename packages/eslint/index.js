function isValidName(name, kind) {
	if (kind === 'const') {
		return /^[A-Z][A-Z0-9_]*$/.test(name);
	}
	return /^[a-z][A-Za-z0-9_]*$/.test(name);
}
const DEFAULT_ELEMENT = 0;

module.exports = {
	rules: {
		'custom-rules-matching': {
			meta: {
				name           : 'eslint-plugin-custom-rules',
				version        : '1.0.0',
				type           : 'problem',
				hasSuggestions : true,
				fixable        : true,
			},
			create: (context) => ({
				VariableDeclaration(node) {
					const { init = {}, id = {} } = node?.declarations[DEFAULT_ELEMENT]|| {};
					
					if(node?.kind==='const'){
						const { name = '' } = id;

						const { type = undefined, properties = [], elements = [] } = init || {};
					
							if (type === 'Literal') {
								if (!isValidName(name, node.kind)) {
									context.report({
										node,
										message: `Variable name ${name} should be in UPPER_CASE`,
									});
								}
							}
		
							if (type === 'ObjectExpression') {
								const objectNamingCondition = properties.find((item) => item?.value?.type !== 'Literal');
								if (!objectNamingCondition) {
									if (!isValidName(name, node.kind)) {
										context.report({
											node,
											message: `Variable name ${name} should be in UPPER_CASE`,
										});
									}
								}
							}
							if (type === 'ArrayExpression') {
								const arrayNamingCondition = elements.find((item) => item?.value?.type !== 'Literal');
								if (!arrayNamingCondition) {
									if (!isValidName(name, node.kind)) {
										context.report({
											node,
											message: `Variable name ${name} should be in UPPER_CASE`,
										});
									}
								}
							}
						
					}
				},
			}),
		},
	},
};
