const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return {
        entry: ['babel-polyfill','./src/js/main.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/main.bundle.js',
        },
        devServer: {
            contentBase: './dist',
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    } 
                }, {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                }, {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {}
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: 'main.css'
            })
        ] 
    }
}