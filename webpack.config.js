const path = require('path');

module.exports = () => {
    return {
        entry: './src/app.jsx',
        output: {
            path: path.resolve('public/dist/'),
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            port: 8000,
            publicPath: '/dist/',
            lazy: false
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx'
            ]
        }
    };
}