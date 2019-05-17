const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                plugins: [
                    ["@babel/plugin-proposal-class-properties", { "loose": true }]
                ],
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            },
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })

    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: 'localhost',
        port: 3000
    }
}