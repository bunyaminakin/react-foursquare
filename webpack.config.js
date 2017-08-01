const HtmlWebpackplugin = require("html-webpack-plugin");
const HtmlWebpackpluginConfig = new HtmlWebpackplugin({
  template: `${__dirname}/src/index.html`,
  filename: "index.html",
  inject: "body"
});

const path = require("path");

module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, "dist")
  },
  plugins: [HtmlWebpackpluginConfig]
};
