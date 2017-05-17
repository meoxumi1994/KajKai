const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    'bundle': './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[id].chunk.[chunkhash].js'
  },
  watch: true,
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
                'syntax-dynamic-import',
                'transform-object-rest-spread'
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.html$/,
      //   use: 'html-loader'
      // },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      // {
      //   test: /\.(csv|tsv)$/,
      //   use: 'csv-loader'
      // },
      // {
      //   test: /\.xml$/,
      //   use: 'xml-loader',
      // }
      // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  devtool: 'eval',
  plugins: [
    // new ManifestPlugin({
    //   fileName: 'manifest.json',
    //   basePath: '/dist/'
    // }),
    // new ChunkManifestPlugin({
    //   filename: 'chunk-manifest.json',
    //   manifestVariable: 'webpackManifest',
    //   inlineManifest: true
    // }),
    // new ExtractTextPlugin({
    //   filename: 'style.[contenthash].css',
    //   allChunks: true,
    //   ignoreOrder: true
    // }),
    // new HtmlWebpackPlugin({
    //   filename: '../index.html',
    //   template: './template.html'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   minChunks: function (module) {
    //     // This prevents stylesheet resources with the .css or .scss extension
    //     // from being moved from their original chunk to the vendor chunk
    //     if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
    //       return false;
    //     }
    //     return module.context && module.context.indexOf("node_modules") !== -1;
    //   },
    //   children: true,
    //   async: true
    // }),
    //   new webpack.optimize.CommonsChunkPlugin({
    //   name: ['bundle', 'manifest'],
    //   minChunks: Infinity
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ]
}
