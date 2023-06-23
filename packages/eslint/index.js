const custom_rules_matching = require('./custom_rules_matching');
const email_check = require('./email_check');
const img_src_cdn = require('./img_src_cdn');
const is_empty_use_check = require('./is_empty_use_check');
const nbsp_ensp_check = require('./nbsp_ensp_check');
const regex_check = require('./regex_check');
const uuid_check = require('./uuid_check');

module.exports = {
	rules: {
		'custom-rules-matching' : custom_rules_matching,
		'img-src-cdn'           : img_src_cdn,
		'regex-check'           : regex_check,
		'nbsp-ensp-check'       : nbsp_ensp_check,
		'is-empty-use-check'    : is_empty_use_check,
		'uuid-check'            : uuid_check,
		'email-check'           : email_check,
	},
};
