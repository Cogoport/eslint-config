const isNodeTypeLiteral = (type) => type === 'Literal';

const checkFormatParams = (node) => isNodeTypeLiteral(node?.arguments?.[1]?.type);

const checkFormtDateParams = (node) => {
	let argsProperties = node?.arguments?.[0]?.properties || [];

	argsProperties = argsProperties.filter((n) => ['dateFormat', 'timeFormat'].includes(n?.key?.name)
    && isNodeTypeLiteral(n?.value?.type));

	return Boolean(argsProperties.length);
};

module.exports = {
	meta: {
		type : 'suggestion',
		docs : {
			description : 'Check if dateFormat is not from GLOBAL_CONSTANTS.formats.dd/MM/yyyy',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			CallExpression(node) {
				if (['formatDate', 'format'].includes(node?.callee?.name)) {
					let isError = false;
					if (node.callee.name === 'formatDate') {
						isError = checkFormtDateParams(node);
					} else {
						isError = checkFormatParams(node);
					}

					if (isError) {
						context.report({
							node,
							message: 'Import time and date format from GLOBAL_CONSTANTS',
						});
					}
				}
			},
		};
	},
};
