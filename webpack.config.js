// webpack.config.js
var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');   // output .html from .jade to path
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var Sprite = require('sprite-webpack-plugin');    //css sprites
// var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');    //minify css

module.exports = {
  entry: {
    'wtoip': './framework.js',
    // 'test': './src/entry/details_entry.js',
  },
  output: {
    path: path.resolve(__dirname, 'html'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "less-loader"]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015-loose'],
          plugins: [
            "transform-es3-property-literals",
            "transform-es3-member-expression-literals",
          ]
        }
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.less', '.js', '.jade']
  },
  plugins: [
    // new webpack.ProvidePlugin({     // auto packing jquery in bundle
    //     $:"webpack-zepto",
    // }),
    new ExtractTextPlugin("[name].bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      beautify: true,
      comments: false,
      // include: /.js$/
      include: /.min.js$/
    })
  ]
};
