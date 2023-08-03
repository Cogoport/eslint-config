const COGOPORT_UTILS_BUILT_IN_IMPORTS_HASH = {
	utilities: [
		'sortBy',
		'debounce',
		'throttle',
		'pick',
		'omit',
		'cloneDeep',
		'unique',
		'uniqueBy',
		'getByKey',
		'isEmpty',
		'isFinite',
		'isNumber',
		'toRawType',
		'chunk',
		'kebabCase',
		'merge',
		'snakeCase',
		'startCase',
		'upperCase',
		'pascalCase',
		'toWords',
	],
	browser : ['isBrowser', 'getCookie', 'setCookie', 'deleteCookie', 'copyToClipboard'],
	dates   : [
		'addDays',
		'addHours',
		'addMinutes',
		'compareAsc',
		'differenceInDays',
		'endOfMonth',
		'getDate',
		'getMonth',
		'getYear',
		'isSameDay',
		'isValid',
		'isYesterday',
		'startOfDay',
		'startOfMonth',
		'subtractDays',
		'toDate',
		'format',
		'endOfWeek',
		'startOfWeek',
		'camelCase',
	],
};

const COGOPORT_UTILS_BUILT_IN_IMPORTS = Object.values(COGOPORT_UTILS_BUILT_IN_IMPORTS_HASH).flat();

module.exports = {
	meta: {
		type : 'error',
		docs : {
			description : 'Check built-in @Cogoport/utils imports',
			category    : 'Best Practices',
			recommended : true,
		},
		schema: [],
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value === '@cogoport/utils') return;

				node.specifiers.forEach((specifier) => {
					if (!specifier.imported) return;
					if (!COGOPORT_UTILS_BUILT_IN_IMPORTS.includes(specifier.imported.name)) return;

					context.report({
						node    : specifier,
						message : `Wrong import! Import ${specifier.imported.name} from the "@Cogoport/utils" package.`,
					});
				});
			},
		};
	},
};
