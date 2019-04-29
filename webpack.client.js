const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
   
    entry: './src/client/app.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    }
    
}

module.exports = merge(baseConfig, config)