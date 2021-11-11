'use strict';
var server = require('server');
// geting the value
server.get('Start', function (req, res, next) {

  res.render('/common/hello');
  next();
});
module.exports = server.exports();
