var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var spawn = require('child_process').spawn;
var PORT = process.env.PORT || 8080;
var HOST = process.env.HOST || 'localhost';
var PROTOCOL = process.env.PROTOCOL || 'http';
var ADDRESS = `${PROTOCOL}://${HOST}:${PORT}`;

config.devtool = 'source-map';
config.debug = true;
config.entry.unshift(`webpack-dev-server/client?${ADDRESS}`, 'webpack/hot/dev-server');
config.plugins = config.plugins.concat(new webpack.HotModuleReplacementPlugin());

// Start a webpack-dev-server
new WebpackDevServer(webpack(config), {
  stats: {
    colors: true
  },
  historyApiFallback: true,
  hot: true
}).listen(PORT, HOST, console.error);

switch (require('os').type()) {
  case 'Linux':
    spawn('xdg-open', [ADDRESS]);
    break;
  default:
    spawn('open', [ADDRESS]);
    break;
}
