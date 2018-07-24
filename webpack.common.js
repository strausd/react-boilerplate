const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            app: './src/app.jsx'
        },
        output: {
            chunkFilename: 'bundle.[name].js',
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public', 'dist'),
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.jsx?$/,
                    use: [{ loader: 'eslint-loader' }],
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpg|svg|png|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.s?css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                },
                {
                    test: /\.jsx?$/,
                    use: [{ loader: 'babel-loader' }],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    };
};
