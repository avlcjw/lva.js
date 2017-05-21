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
    path: path.resolve('./html'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
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
      // {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})},
      // {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8096&name=./assets/images/[name].[ext]'},
      // {test: /\.jade$/, loader: 'jade-loader', query: {pretty: true}}
    ]
  },
  resolve: {
    extensions: ['.css', '.less', '.js', '.jade']
  },
  plugins: [
    // new webpack.ProvidePlugin({     // auto packing jquery in bundle
    //     $:"webpack-zepto",
    // }),
    new ExtractTextPlugin("./html/[name].bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      beautify: true,
      comments: false,
      // include: /.js$/
      include: /.min.js$/
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'details.html',
    //   template: './src/details.jade',
    //   inject: false,
    //   // inject:true,
    //   // css: [ "assets/css/product-details.css" ],
    //   // js: [ "assets/js/fuck.bundle.js", "assets/detail.bundle.js"],
    //   // "chunks": {
    //   //     "head": {
    //   //         // "entry": "assets/css/product-details.css.js",
    //   //         "css": [ "assets/css/product-details.css" ]
    //   //     },
    //   //     "main": {
    //   //         "entry": "assets/main_bundle.js",
    //   //         // "css": ["assets/detail.bundle.js"]
    //   //     },
    //   // }
    // }),
  ]
};
