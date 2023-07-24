const check_element_role_button = require('./rules/check_element_role_button');
const cl_for_merging_styles_class = require('./rules/cl_for_merging_styles_class');
const component_pascal = require('./rules/component_pascal');
const date_time_format_check = require('./rules/date_time_format_check');
const default_comp_props = require('./rules/default_comp_props');
const default_usestate = require('./rules/default_usestate');
const email_check = require('./rules/email_check');
const function_name_check = require('./rules/function_name_check');
const hook_sequence = require('./rules/hook_sequence');
const img_src_cdn = require('./rules/img_src_cdn');
const import_from_react = require('./rules/import_from_react');
const is_empty_use_check = require('./rules/is_empty_use_check');
const key_as_function = require('./rules/key_as_function');
const key_in_for_each_map = require('./rules/key_in_for_each_map');
const nbsp_ensp_check = require('./rules/nbsp_ensp_check');
const regex_check = require('./rules/regex_check');
const uuid_check = require('./rules/uuid_check');
const variable_name_check = require('./rules/variable_name_check');
const variable_value_jsx = require('./rules/variable_value_jsx');
const variables_name_check = require('./rules/variables_name_check');
const zeroth_index_import = require('./rules/zeroth_index_import');

module.exports = {
	rules: {
		'variables-name-check'        : variables_name_check,
		'img-src-cdn'                 : img_src_cdn,
		'regex-check'                 : regex_check,
		'nbsp-ensp-check'             : nbsp_ensp_check,
		'is-empty-use-check'          : is_empty_use_check,
		'uuid-check'                  : uuid_check,
		'email-check'                 : email_check,
		'cl-for-merging-styles-class' : cl_for_merging_styles_class,
		'date-time-format-check'      : date_time_format_check,
		'check-element-role-button'   : check_element_role_button,
		'key-in-for-each-map'         : key_in_for_each_map,
		'key-as-function'             : key_as_function,
		'zeroth-index-import'         : zeroth_index_import,
		'default-usestate'            : default_usestate,
		'hook-sequence'               : hook_sequence,
		'variable-name-check'         : variable_name_check,
		'component-pascal'            : component_pascal,
		'variable-value-jsx'          : variable_value_jsx,
		'default-component-props'     : default_comp_props,
		// new
		'import-from-react'           : import_from_react,
		'function-name-check'         : function_name_check,
	},
};
