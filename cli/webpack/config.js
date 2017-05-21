/**
 * Created by avlcjw on 2017/5/1.
 */
var path = require('path');
var webpack = require('webpack');

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let makeConfig;
switch (env) {
  case 'development':
    makeConfig = require('./development');
    break;
  case 'production':
    makeConfig = require('./production');
    break;
  default:
    makeConfig = require('./production');
    break;
}
module.exports = makeConfig;
