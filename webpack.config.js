const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'PointMap',
    libraryExport: 'PointMap',
    filename: 'pointmap.min.js',
    libraryTarget: 'umd'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}