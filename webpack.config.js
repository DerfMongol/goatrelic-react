const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/client/app.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
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
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: 'localhost',
        port: 3000
    }

}