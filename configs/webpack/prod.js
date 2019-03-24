// production config
const merge = require('webpack-merge');
const {resolve} = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.min.js',
    path: resolve(__dirname, '../../docs'),
    publicPath: './',
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      { from: resolve(process.cwd(), 'public/assets'), to: 'public/assets' }
    ]),
  ],
});