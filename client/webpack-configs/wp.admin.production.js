const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'bundle': './index-admin.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js',
    publicPath: '/dist/',
    chunkFilename: '[id].chunk.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', {'modules': false}],
                'react'
              ],
              plugins: [
                'babel-plugin-root-import',
                'transform-object-rest-spread'
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.[contenthash].css',
      allChunks: true,
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './template.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
    //       return false
    //     }
    //     return module.context && module.context.indexOf("node_modules") !== -1
    //     },
        asyn: true,
        children: true,
        minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['manifest'],
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
