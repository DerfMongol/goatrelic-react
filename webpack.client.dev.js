const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {

    mode: 'development',
    entry: './src/client/client.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: 'localhost',
        port: 3000
    }

}

module.exports = merge(baseConfig, config)