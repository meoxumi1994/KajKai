var webpack = require('webpack')
var fs = require('fs')

module.exports = {
  entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?https://localhost:3000',
      'webpack/hot/only-dev-server',
      './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
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
                'react-hot-loader/babel',
                'syntax-dynamic-import',
                'transform-object-rest-spread'
              ]
            }
          }
        ]
      },
      // {test: /\.css$/, loader: 'style-loader!css-loader'},
      // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff'},
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  devServer: {
    https: {
      key: fs.readFileSync('./config/kajkai.key'),
      cert: fs.readFileSync('./config/kajkai.crt')
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    contentBase: __dirname,
    publicPath: '/dist/'
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
