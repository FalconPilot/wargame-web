const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production'

module.exports = {
  mode: ENV,
  entry: {
    main: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      { from: path.join(__dirname, 'src', 'static'), to: 'static' }
    ])
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }, {
      test: /\.(css)$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      use: ['file-loader']
    }]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: process.env.PORT,
    historyApiFallback: true,
    hot: true
  }
}
