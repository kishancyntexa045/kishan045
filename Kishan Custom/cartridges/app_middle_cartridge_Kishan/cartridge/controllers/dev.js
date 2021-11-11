//This controller has two middleware steps. 
'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {

	res.print('<html><body><h1>This is the original Show Route.</h1></body></html>');
	next();

});

server.get('Start', function (req, res, next) {

	res.print('<html><body><h1>This is the original Start Route.</h1></body></html>');
    next();
	 
});

server.prepend('Show', function (req, res, next) {

	res.print('<html><body><h1>This is the prepend Show Route.</h1></body></html>');
	next();

});

server.replace('Start', function (req, res, next) {

	res.print('<html><body><h1>This is the replace Show Route.</h1></body></html>');
	next();

});

server.append('Show', function (req, res, next) {

	res.print('<html><body><h1>This is the append Show Route.</h1></body></html>');
	next();

});

module.exports = server.exports();
