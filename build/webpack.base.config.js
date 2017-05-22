const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  context: path.join(projectRoot, './'),

  output: {
    path: path.join(projectRoot, '.public/'),
    filename: './scripts/[name].js',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /.public/],
        options: {
          formatter: eslintFriendlyFormatter,
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              preserveWhitespace: false,
              loaders: {
                less: ExtractTextWebpackPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                  ],
                }),
              },
              postcss: [
                autoprefixer({
                  browsers: ['last 2 versions', 'ie 10-11'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'less-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, ".public"),
    compress: true,
    port: 8000
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: process.env.API_URL,
      },
    }),

    new ExtractTextWebpackPlugin({
      filename: 'styles/style.css',
    }),

    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../.public/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
};
