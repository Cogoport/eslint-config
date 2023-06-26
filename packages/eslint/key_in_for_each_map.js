const isNodeTypeJSX = (type) => ['JSXFragment', 'JSXElement'].includes(type);
const isNodeTypeIdentifier = (type) => type === 'Identifier';

const findKeyAttribute = (attributes) => {
	const keyIndex = attributes?.findIndex((k) => k?.name?.name === 'key');

	if (keyIndex === -1) return true;

	return false;
};

const checkIsVariablePushedIsJsx = (variables, currentVarName) => {
	const currentVarNode = variables?.find((v) => v.name === currentVarName);

	if (!isNodeTypeJSX(currentVarNode?.defs?.[0]?.node?.init.type)) return false;

	const attributes = currentVarNode.defs?.[0].node?.init?.openingElement?.attributes;

	return findKeyAttribute(attributes);
};

const handleError = (context, node) => {
	context.report({
		node,
		message: 'Pass Key in element',
	});
};

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Ensure that JSX elements pushed into an array have the "key" prop',
			category    : 'Possible Errors',
			recommended : true,
			url         : '',
		},
		schema: [],
	},
	create(context) {
		return {
			CallExpression(node) {
				if (['push', 'map'].includes(node.callee.property?.name)) {
					if (node.callee.property?.name === 'push') {
						const { variables = [] } = context.getScope();
						const firstArg = node.arguments?.[0] || {};

						if (isNodeTypeIdentifier(firstArg?.type)) {
							if (checkIsVariablePushedIsJsx(variables, firstArg.name)) {
								handleError(context, node);
							}
						}

						if (isNodeTypeJSX(firstArg?.type)) {
							if (findKeyAttribute(firstArg?.openingElement?.attributes)) {
								handleError(context, node);
							}
						}
					}

					if (node.callee.property?.name === 'map') {
						const firstArg = node?.arguments?.[0];

						if (isNodeTypeIdentifier(firstArg?.body?.type)) {
							if (checkIsVariablePushedIsJsx(
								context.getScope()?.upper?.variables,
								firstArg?.body?.name,
							)) {
								handleError(context, node);
							}
						}
					}
				}
			},
		};
	},
};
