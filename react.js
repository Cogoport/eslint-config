const baseRules = require('./helpers/base-rules');
const reactRules = require('./helpers/react-rules');
const commonConfig = require('./helpers/common-config');

module.exports = {
    extends : ['airbnb', 'airbnb-hooks'],

    ...commonConfig,
    
    rules : {
        ...baseRules,
        ...reactRules,
    }
}
