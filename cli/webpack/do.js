/**
 * Created by avlcjw on 2017/5/1.
 */
var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');
module.exports.watch = function watch(config) {
  "use strict";
  const compiler = webpack(config);

  const watching = compiler.watch({
    /* watchOptions */
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }, (err, stats) => {
    // Print watch/build result here...
    console.log(stats.toString({
      timings: true,
      chunks: false,  // Makes the build much quieter
      colors: true    // Shows colors in the console
    }));
  });
  console.log('Message: yun project is watching....'.silly);
};

module.exports.watchserver = function watchserver(config) {
  "use strict";
  console.log(typeof config.entry.index, 123123);
  config.entry.index.unshift(`webpack-dev-server/client?http://localhost:${config.devServer.port}/`);
  const compiler = webpack(config);

  let server = new WebpackDevServer(compiler, config.devServer);
  console.log(`Message: DevServer is running on ${config.devServer.host}:${config.devServer.port}....`.silly);
  server.listen(config.devServer.port);
};

module.exports.pack = function pack(config) {
  "use strict";
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    console.error('Environment is %s'.info, process.env.NODE_ENV);
    // console.log(stats);
    if (err || stats.hasErrors()) {
      // Handle errors here
      // console.log(stats);
      console.log(err + ''.error);
    }
    console.log(stats.toString({
      timings: true,
      chunks: false,  // Makes the build much quieter
      colors: true    // Shows colors in the console
    }));

    // Done processing
    console.log('Message: yun is packaged!'.silly);
  });
};
