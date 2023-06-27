const HOOK_SEQUENCE = ['useRouter', 'useTranslation', 'useSelector',
	'useDispatch', 'useContext', 'useState', 'useRequest', 'useForm'];

const checkSequence = (current, sequence) => {
	const currentIndexInSeq = HOOK_SEQUENCE.findIndex((i) => i === current);

	const tempHookSeq = HOOK_SEQUENCE.slice(0, currentIndexInSeq);

	const tempSeq = sequence?.filter((i) => !(i === current || tempHookSeq.includes(i)));

	return !tempSeq?.length;
};

module.exports = {
	meta: {
		type : 'warn',
		docs : {
			description : 'Hook Sequence',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		const sequence = [];

		return {
			CallExpression(node) {
				const calleeName = node.callee.name || '';
				if (HOOK_SEQUENCE.includes(calleeName)) {
					sequence.push(calleeName);

					const isSequence = checkSequence(calleeName, sequence);

					if (!isSequence) {
						const seq_str = HOOK_SEQUENCE.toString();
						context.report({
							node,
							message: `Please follow hook sequence => ${seq_str}`,
						});
					}
				}
			},
		};
	},
};
