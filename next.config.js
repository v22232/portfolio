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
        
        const originResolve = config.resolve;
        config.resolve = {
            ...originResolve,
            alias: {
                ...originResolve.alias,
                '@styles': path.resolve(__dirname, 'styles'),
                '@components': path.resolve(__dirname, 'components'),
                '@hooks': path.resolve(__dirname, 'hooks'),
                '@utils': path.resolve(__dirname, 'utils'),
                '@store': path.resolve(__dirname, 'store'),
            },
        };

        // Important: return the modified config
        return config;
    },
};
