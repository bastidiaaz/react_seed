var webpack = require('webpack');
var path = require('path');

var HtmlPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app');


module.exports = {
  entry: [
    'react-hot-loader/patch',
    APP_DIR + '/index.jsx',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
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
      template: 'src/app/index.html'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
}
