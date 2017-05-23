const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const isDevelopment = process.env.NODE_ENV === 'development';

const baseClientConfig = webpackMerge(baseConfig, {
  entry: {
    bundle: './src/init.js',
  },

  output: {
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.BROWSER': true,
    }),

    new CopyWebpackPlugin([
      {
        from: './static/',
        to: './'
      },
    ]),
  ],
});

if (isDevelopment) {
  module.exports = webpackMerge(baseClientConfig, {
    devtool: 'source-map',

    plugins: [
      new BrowserSyncPlugin({
        proxy: `http://localhost:${process.env.PORT}`,
        notify: false,
        ghostMode: false,
        open: false,
        port: process.env.BS_PORT || 3000,
      }),
    ],
  });
} else {
  module.exports = webpackMerge(baseClientConfig, {});
}
