const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'MyMap',
    libraryExport: 'MyMap',
    filename: 'mymap.min.js',
    libraryTarget: 'umd'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}