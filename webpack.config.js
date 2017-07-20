var HtmlWebpackplugin = require('html-webpack-plugin');
var HtmlWebpackpluginConfig = new HtmlWebpackplugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})

const path = require("path");

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, "dist"),
    },
    plugins: [HtmlWebpackpluginConfig]
}
