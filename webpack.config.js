const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
// const PwaManifestWebpackPlugin = require('pwa-manifest-webpack-plugin');

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
  plugins: [
    // new PwaManifestWebpackPlugin({
    //   name: 'Minimalist',
    //   description: 'A Minimalist Reimplementation of Popular Libraries',
    //   background_color: '#1565c0',
    //   theme_color: '#1976d2',
    //   icon: {
    //     src: path.resolve('src/logo.png'),
    //     sizes: [36, 48, 96, 144, 192]
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new OfflinePlugin()
  ],
  module: { rules }
};