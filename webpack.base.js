const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = {

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
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }
                  },
                { loader: 'sass-loader', options: { sourceMap: true } },
            ],
        }, {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new Dotenv()
    ]
}
