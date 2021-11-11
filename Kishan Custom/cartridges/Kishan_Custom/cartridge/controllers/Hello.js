'use strict';
var server = require('server');
// geting the value
server.get('Start', function (req, res, next) {
   // res.print(<h1>Hello world my name is ram!</h1>);
  // res.render('hello', {param1:"Hello from Isml"});// calling an isml template
   // res.json({name:'ram'});
  res.render('/checkout/shipping/shippingAddress');
  next();
});
module.exports = server.exports();
