const INCEMENT_OF_INDEX_IN_LOOP_BY = 1;

const MIN_ARRAY_LENGTH_FOR_LOOP = 0;

const URL_TO_CHECK = 'https://cdn.cogoport.io';

const isTypeofValueString = (value) => typeof value === 'string';
const isTypeLiteral = (value) => value?.type === 'Literal';
const isTypeObject = (value) => value?.type === 'ObjectExpression';

const handleShowUrlError = (node, context) => (context.report({
	node,
	message : 'Import URL from global_constants',
	loc     : node.loc,
}));

const checkIsUrlPresent = (node, context, value) => {
	if (value?.includes(URL_TO_CHECK))handleShowUrlError(node, context);
};

function checkProperties(properties, context) {
	for (let i = 0; i < properties?.length || MIN_ARRAY_LENGTH_FOR_LOOP; i += INCEMENT_OF_INDEX_IN_LOOP_BY) {
		if (properties[i].value && isTypeLiteral(properties[i].value)
        && isTypeofValueString(properties[i].value.value)) {
			checkIsUrlPresent(properties[i], context, properties[i].value.value);
		}

		if (properties[i].value && isTypeObject(properties[i].value)) {
			checkProperties(properties[i].value.properties, context);
		}
	}
}

function checkElements(elements, context) {
	for (let i = 0; i < elements?.length || MIN_ARRAY_LENGTH_FOR_LOOP; i += INCEMENT_OF_INDEX_IN_LOOP_BY) {
		if (isTypeLiteral(elements[i]) && isTypeofValueString(elements[i].value)) {
			checkIsUrlPresent(elements[i], context, elements[i].value);
		}

		if (isTypeObject(elements[i])) {
			checkProperties(elements[i].properties, context);
		}
	}
}

module.exports = {
	rules: {
		'img-src-cdn': {
			meta: {
				type : 'warn',
				docs : {
					description : 'Enforce importing image src from global constants if it includes a specific URL',
					category    : 'Best Practices',
					recommended : true,
				},
				schema: [],
			},
			create(context) {
				let declaredVariable = null;

				return {
					VariableDeclarator(node) {
						if (node.init && isTypeLiteral(node.init) && isTypeofValueString(node.init.value)) {
							declaredVariable = node;
						}

						if (node.init && ['ObjectExpression', 'ArrayExpression'].includes(node.init.type)) {
							if (node.init.type === 'ObjectExpression') {
								checkProperties(node.init.properties, context);
							} else {
								checkElements(node.init.elements, context);
							}
						}
					},
					JSXOpeningElement(node) {
						if (['Image', 'img'].includes(node.name.name)) {
							const srcAttribute = node.attributes.find((attr) => attr.name.name === 'src');

							if (srcAttribute && srcAttribute.value.value?.includes(URL_TO_CHECK)
                             && !declaredVariable) {
								context.report({
									node    : srcAttribute,
									message : 'Import the image source from a global constant',
								});
							} else {
								const importStatements = context.getSourceCode()
									.ast.body.filter((statement) => statement.type === 'ImportDeclaration');

								const hasMatchingImport = importStatements
									.some((statement) => statement.source.value
										?.includes('globalization/constants/globals'));

								if (!hasMatchingImport) {
									context.report({
										node    : declaredVariable,
										message : 'Import the image source from a global constant',
									});
								}
							}
						}
					},
				};
			},
		},
	},
};
