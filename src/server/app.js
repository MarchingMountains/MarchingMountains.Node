'use strict';

var	path = require('path');
var logger = require('morgan');
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var	routes = require('./routes');
var compression = require('compression');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var ReactDOM = require('react-dom/server');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
 Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('./src/client/views/index.html', {html: html });
    res.send(page);
 });
});

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

app.listen(port);
