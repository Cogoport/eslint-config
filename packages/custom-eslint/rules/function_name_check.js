const hasJSXElement = (node) => {
	if (!node) return false;

	const NODE_TYPE_CHECK_HAS_JSX_ELEMENT_MAPPING = {
		JSXFragment             : () => true,
		JSXElement              : () => true,
		BlockStatement          : () => node.body.some(hasJSXElement),
		IfStatement             : () => hasJSXElement(node.consequent),
		CallExpression          : () => node.arguments.some(hasJSXElement),
		ArrowFunctionExpression : () => hasJSXElement(node.body),
		ConditionalExpression   : () => hasJSXElement(node.consequent),
		ReturnStatement         : () => hasJSXElement(node.argument),
	};

	const functionRef = NODE_TYPE_CHECK_HAS_JSX_ELEMENT_MAPPING[node.type] || null;

	return functionRef?.() || false;
};

const CASE_MAPPING = {
	regex: {
		PascalCase : /^[A-Z][a-zA-Z]*$/,
		camelCase  : /^[a-z][a-zA-Z]*$/,
	},
	message: {
		PascalCase : "Function '{{functionName}}' is returning JSX and should be named using PascalCase",
		camelCase  : "Function '{{functionName}}' is not returning JSX and should be named using camelCase",
	},
};

function checkNameCase({ name, expectedCase }) {
	const regExp = CASE_MAPPING.regex[expectedCase];

	// Check if the name matches the regular expression
	if (!regExp || !regExp.test(name)) return false;

	// Check if the name contains any digits or underscores
	if (/\d|_/.test(name)) return false;

	return true;
}

const validateFunctionName = ({ name, isJSXReturn = false, context, node }) => {
	const expectedCase = isJSXReturn ? 'PascalCase' : 'camelCase';

	const isValidCase = checkNameCase({ name, expectedCase });

	if (isValidCase) return;

	const message = CASE_MAPPING.message[expectedCase].replace('{{functionName}}', name);

	context.report({
		node,
		message,
	});
};

module.exports = {
	meta: {
		type : 'error',
		docs : {
			description : 'Enforce proper function naming based on JSX return',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			// VariableDeclarator(node) {
			// 	const functionName = node.id.name;

			// 	if (!isJSX(node.init.type)) return;

			// 	context.report({
			// 		node,
			// 		message: 'convert to component',
			// 	});
			// },
			ArrowFunctionExpression(node) {
				if (!['VariableDeclarator'].includes(node.parent.type)) return;

				validateFunctionName({
					context,
					node        : node.parent,
					name        : node.parent.id.name,
					isJSXReturn : hasJSXElement(node.body),
				});
			},
			FunctionDeclaration(node) {
				validateFunctionName({
					context,
					node,
					name        : node.id.name,
					isJSXReturn : hasJSXElement(node.body),
				});
			},
			FunctionExpression(node) {
				if (!['VariableDeclarator'].includes(node.parent.type)) return;

				validateFunctionName({
					context,
					node        : node.parent,
					name        : node.parent.id.name,
					isJSXReturn : hasJSXElement(node.body),
				});
			},
		};
	},
};
