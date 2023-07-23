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
				if (node.source.value === 'react') return;

				node.specifiers.forEach((specifier) => {
					if (!REACT_BUILT_IN_IMPORTS.includes(specifier.imported.name)) return;

					context.report({
						node    : specifier,
						message : 'Wrong import! Import from the "react" package.',
					});
				});
			},
		};
	},
};
