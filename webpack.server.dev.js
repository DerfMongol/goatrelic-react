const webpackNodeExternals = require('webpack-node-externals')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
   
    mode: 'development',
    // Inform webpack that we're building a bundle for nodejs, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: 'localhost',
        port: 3000
    }
}

module.exports = merge(baseConfig, config)