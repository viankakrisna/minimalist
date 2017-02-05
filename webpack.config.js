const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const rules = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: [['es2015', { modules: false }], 'stage-0'],
      plugins: []
    }
  }
];

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [path.resolve('src', 'main.js')],
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '.'
  },
  plugins: [new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    }), new OfflinePlugin()],
  module: { rules }
};
