const custom_rules_matching = require('./custom_rules_matching');
const img_src_cdn = require('./img_src_cdn');
const regex_check = require('./regex_check');

module.exports = {
	rules: {
		'custom-rules-matching' : custom_rules_matching,
		'img-src-cdn'           : img_src_cdn,
		'regex-check'           : regex_check,
	},
};
