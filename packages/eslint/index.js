const check_element_role_button = require('./check_element_role_button');
const cl_for_merging_styles_class = require('./cl_for_merging_styles_class');
const component_pascal = require('./component_pascal');
const custom_rules_matching = require('./custom_rules_matching');
const date_time_format_check = require('./date_time_format_check');
const default_usestate = require('./default_usestate');
const email_check = require('./email_check');
const hook_sequence = require('./hook_sequence');
const img_src_cdn = require('./img_src_cdn');
const is_empty_use_check = require('./is_empty_use_check');
const key_as_function = require('./key_as_function');
const key_in_for_each = require('./key_in_for_each');
const nbsp_ensp_check = require('./nbsp_ensp_check');
const regex_check = require('./regex_check');
const uuid_check = require('./uuid_check');
const zeroth_index_import = require('./zeroth_index_import');

module.exports = {
	rules: {
		'custom-rules-matching'       : custom_rules_matching,
		'img-src-cdn'                 : img_src_cdn,
		'regex-check'                 : regex_check,
		'nbsp-ensp-check'             : nbsp_ensp_check,
		'is-empty-use-check'          : is_empty_use_check,
		'uuid-check'                  : uuid_check,
		'email-check'                 : email_check,
		'cl-for-merging-styles-class' : cl_for_merging_styles_class,
		'date-time-format-check'      : date_time_format_check,
		'check-element-role-button'   : check_element_role_button,
		'key-in-for-each'             : key_in_for_each,
		'key-as-function'             : key_as_function,
		'zeroth-index-import'         : zeroth_index_import,
		'default-usestate'            : default_usestate,
		'hook-sequence'               : hook_sequence,
		'component-pascal'            : component_pascal,
	},
};
