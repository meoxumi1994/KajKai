const { resolve } = require('path');
var webpack = require('webpack');
var fs = require('fs');

module.exports = {
  "devtool": "eval",
  entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?https://localhost:3000',
      "./index.js",
      'webpack/hot/only-dev-server'
  ],
  output: {
    path: __dirname + '/',
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            options: {
                presets: [[ 'es2015', {"modules": false}], 'react'],
                plugins: ["transform-object-rest-spread",
                          "babel-plugin-root-import",
                        ]
            },
            loader: 'babel-loader',
        }
    ]
  },
  devServer: {
    https: {
        key: fs.readFileSync('./config/kajkai.key'),
        cert: fs.readFileSync('./config/kajkai.crt'),
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    contentBase: __dirname + '/',
    // match the output path
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
}
