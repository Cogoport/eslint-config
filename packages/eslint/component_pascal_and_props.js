const isNodeTypeFunction = (type) => type === 'FunctionDeclaration';
const isNodeTypeObject = (type) => type === 'ObjectPattern';
const isKindInit = (kind) => kind === 'init';
const isNodeTypeAssignment = (type) => type === 'AssignmentPattern';
const isNodeTypeIndentifier = (type) => type === 'Identifier';

const checkForKeyAndValue = (node, context) => {
	if (isNodeTypeIndentifier(node?.key?.type) && !isNodeTypeAssignment(node?.value?.type) && isKindInit(node?.kind)) {
		context.report({
			node,
			message: `Please provide default value for ${node?.key?.name}`,
		});
	}
};
const checkForPropsDefault = (firstArg, context) => {
	if (!isNodeTypeObject(firstArg?.type)) return false;

	const properties = firstArg?.properties || [];

	for (let i = 0; i < properties.length; i += 1) {
		checkForKeyAndValue(properties[i], context);
	}

	return true;
};

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

					const parent = node?.parent?.parent;

					if (isNodeTypeFunction(parent?.type) && parent?.params?.length) {
						checkForPropsDefault(parent?.params?.[0], context);
					}

					if (!isPascal) {
						context.report({
							node,
							message : 'React component names should be in PascalCase.',
							loc     : node.parent.parent.parent.loc,
						});
					}
				}
			},
		};
	},
};
