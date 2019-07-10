const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const fs = require('fs')

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
                { loader: 'sass-loader', options: { sourceMap: true } }
            ],
        }, {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    outputPath: '/images',
                    publicPath: '/images'
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        })

    ]
}
