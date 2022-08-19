const baseRules = require('./helpers/base-rules');
const commonConfig = require('./helpers/common-config');

module.exports = {
    extends : ['airbnb-base'],

    ...commonConfig,
    
    rules : {
        ...baseRules
    }
}