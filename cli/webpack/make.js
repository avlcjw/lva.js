/**
 * Webpack config for make
 */
/*eslint-env node*/
var fs = require('fs');
var path = require('path');
var getFiles = require('../utils/getFile');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// var Sprite = require('sprite-webpack-plugin');    //css sprites
// var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');    //minify css

const SRCPATH = path.join(__dirname, '../../src');

module.exports = function makeWebpackConfig(options) {
  let BUILD = !!options.BUILD;
  let DEV = !!options.DEV;

  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  let config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = {
    // app: './main/index.js',
    polyfills: ['./polyfills.js'],
    vendor: [
      'lodash'
    ]
  };
  getFiles.getFileList(`${SRCPATH}/entry/`, function (list) {
    list.forEach(function (v, i) {
      config.entry[v.filename.substring(0, v.filename.length - 3)] = [`${SRCPATH}/entry/${v.filename}`]
    });
  });


  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */

  config.output = {
    // Absolute output directory
    path: path.join(__dirname, `${options.dist}`),

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: '/',
    //publicPath: BUILD ? '/' : 'http://localhost:' + env.port + '/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: BUILD ? '[name].[hash:5].js' : '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: BUILD ? '[name].[hash：5].js' : '[name].bundle.js'
  };


  // Initialize module
  config.module = {
    // preLoaders: [],
    loaders: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: 'babel-loader',
      query: {presets: ['es2015'], compact: false},
      include: [
        `${SRCPATH}`,
        // path.resolve(__dirname, 'node_modules/lodash-es/')
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8012&name=[name].[hash:5].[ext]'
    },
      // {
      //   // ASSET LOADER
      //   // Reference: https://github.com/webpack/file-loader
      //   // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      //   // Rename the file using the asset hash
      //   // Pass along the updated reference to your code
      //   // You can add here any file extension you want to get copied to your output
      //   test: /\.(svg|woff|woff2|ttf|eot)([\?]?.*)$/,
      //   loader: 'file-loader',
      //   query: {
      //     name: '[name].[ext]'
      //   }
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!autoprefixer-loader'
        })
      },
      {
        // SASS LOADER
        // Reference: https://github.com/jtangelder/sass-loader
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!autoprefixer-loader!sass-loader'
        }),
        include: [
          `${SRCPATH}`
        ]
      }, {
        // artTemplate LOADER
        test: /\.html$/,
        loader: 'art-template-loader',
        include: [
          `${SRCPATH}`
        ]
      }]
  };


  config.plugins = [

    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
    new ExtractTextPlugin({filename: 'css/[name].css', disable: !BUILD, allChunks: true}),
    new CleanWebpackPlugin([`./dist`, `./.tmp`], {
      root: path.join(__dirname, '../../../'),
      verbose: true,
      dry: false,
      exclude: ['shared.js']
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../../src/assets'),
      to: path.join(__dirname, `${options.dist}/assets`)
    }]),
  ];


  config.plugins.push(new CommonsChunkPlugin({
    name: 'vendor',

    // filename: "vendor.js"
    // (Give the chunk a different name)

    minChunks: Infinity
    // (with more entries, this ensures that no other module
    //  goes into the vendor chunk)
  }));


  // Skip rendering _index.html in test mode
  // Reference: https://github.com/ampedandwired/html-webpack-plugin
  // Render _index.html


  getFiles.getFileList('src/pages/', function (list) {
    list.forEach(function (v, i) {
      // console.log(v.filename.substr(1));
      config.plugins.push(
        new HtmlWebpackPlugin({
          template: v.path + v.filename,
          filename: v.filename.substr(1),
          alwaysWriteToDisk: true,
          minify: {
            removeComments: options.build ? true : false,
            collapseWhitespace: options.build ? true : false
          }
        })
      );
    });
  });

  // let htmlConfig = {
  //   template: './src/pages/_index.html',
  //   filename: 'index.html',
  //   alwaysWriteToDisk: true
  // };
  config.plugins.push(
    // new HtmlWebpackPlugin(htmlConfig),
    new HtmlWebpackHarddiskPlugin()
  );

  // Add build specific plugins
  if (BUILD) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoEmitOnErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }),

      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    );
  }

  if (DEV) {
    config.plugins.push(
      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      })
    );
  }

  config.cache = DEV;


  config.resolve = {
    extensions: ['.css', '.scss', '.js', '.ts', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg']
  };


  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: path.join(__dirname, options.dist),
    compress: true,
    host: options.host,
    port: options.port ? options.port : 80,
    proxy: options.proxy ? options.proxy : {},
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    },
    setup: function(app) {
      // Here you can access the Express app object and add your own custom middleware to it.
      // For example, to define custom handlers for some paths:
      // app.get('/some/path', function(req, res) {
      //   res.json({ custom: 'response' });
      // });
    },

  };

  config.node = {
    global: true,
    process: true,
    crypto: 'empty',
    clearImmediate: false,
    setImmediate: false
  };

  return config;


};
