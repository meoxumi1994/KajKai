const { resolve } = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      "./index.js",
      'webpack/hot/only-dev-server'
  ],
  output: {
    path: __dirname + '/',
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: __dirname,
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
