var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');


module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlPlugin({ //Handle HTML files
      template: 'src/client/app/index.html'
    })
  ]
}
