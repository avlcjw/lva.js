/**
 * Webpack config for productions
 */
module.exports = require('./make')({
  host: 'yun.lva.com',
  port: 80,
  proxy: {
    "/": {
      target: "http://localhost:3000",
      bypass: function (req, res, proxyOptions) {
        console.log('start: %s at ==========================\r\n File: %s', new Date(), req.url);
        if (req.url.indexOf(".png") !== -1 || req.url.indexOf(".jpg") !== -1 || req.url.indexOf(".gif") !== -1 || req.url.indexOf(".js") !== -1 || req.url.indexOf(".css") !== -1 || req.url.indexOf(".ico") !== -1 || req.url.indexOf(".html") !== -1 || req.headers.accept.indexOf("text/html") !== -1) {
          console.log('Skip proxy: %s at %s===============\r\n', req.url, new Date());
          return req.url;
        }
        console.log('end: %s at %s ==========================\r\n', req.url, new Date());
      }
    }
  },
  dist: '../../../dist',
  BUILD: true,
  DEV: false
});
