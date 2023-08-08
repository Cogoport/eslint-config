const REACT_BUILT_IN_IMPORTS_HASH = {
	hooks: [
		'useCallback',
		'useContext',
		'useDebugValue',
		'useDeferredValue',
		'useEffect',
		'useId',
		'useImperativeHandle',
		'useInsertionEffect',
		'useLayoutEffect',
		'useMemo',
		'useReducer',
		'useRef',
		'useState',
		'useSyncExternalStore',
		'useTransition',
	],
	components: [
		'Fragment',
		'Profiler',
		'StrictMode',
		'Suspense',
	],
	apis: [
		'createContext',
		'forwardRef',
		'lazy',
		'memo',
		'startTransition',
	],
};

const REACT_BUILT_IN_IMPORTS = Object.values(REACT_BUILT_IN_IMPORTS_HASH).flat();

const SOURCE_VALUE_FUNCTION_MAPPING = {
	react({ context, specifier }) {
		if (specifier.imported.name !== 'React') return;

		context.report({
			node    : specifier,
			message : "Incorrect import! Import 'React' as the default package.",
		});
	},
	others({ context, specifier }) {
		if (!REACT_BUILT_IN_IMPORTS.includes(specifier.imported.name)) return;

		context.report({
			node    : specifier,
			message : `Incorrect import! Import '${specifier.imported.name}' from the 'react' package.`,
		});
	},
};

const SPECIFIER_TYPE_FUNCTION_MAPPING = {
	// ImportDefaultSpecifier({ context, node, specifier }) { },
	ImportSpecifier({ context, node, specifier }) {
		const functionRef = SOURCE_VALUE_FUNCTION_MAPPING[node.source.value] || SOURCE_VALUE_FUNCTION_MAPPING.others;

		if (typeof functionRef !== 'function') return;

		functionRef({ context, specifier });
	},
};

module.exports = {
	meta: {
		type : 'error',
		docs : {
			description : 'Check built-in React imports',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.specifiers.length === 0) {
					context.report({
						node,
						// eslint-disable-next-line max-len
						message: `Remove this import statement,since there is no import from the '${node.source.value}' package.`,
					});

					return;
				}

				node.specifiers.forEach((specifier) => {
					const functionRef = SPECIFIER_TYPE_FUNCTION_MAPPING[specifier.type];

					if (typeof functionRef !== 'function') return;

					functionRef({ context, node, specifier });
				});
			},
		};
	},
};
