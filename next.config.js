const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: ['url-loader']
        });
        return config;
    },
};
