module.exports = {
  entry: {
    "demo": './index.js'
  },
  "devtool": "eval",
  output: {
    path: __dirname + '/dist',
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
  watch: true
}
