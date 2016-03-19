'use strict';

var	path = require('path');
var logger = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.use(require('prerender-node'));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')));
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use('/*', express.static('./src/client/index.html'));

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

app.listen(port);
