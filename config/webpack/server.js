const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const sharedConfig = require('./shared.js');
const { settings, output } = require('./configuration.js');

module.exports = merge(sharedConfig, {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: output.path,
    publicPath: output.publicPath,
  }
})
