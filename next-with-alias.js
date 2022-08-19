const nextConfig = require('./next');

module.exports = {
    ...nextConfig,

    settings: {
        'import/resolver': {
            'eslint-import-resolver-custom-alias': {
            alias      : { '@': './' },
            extensions : ['.js'],
            packages   : ['packages/*'],
            },
        },
    },
}