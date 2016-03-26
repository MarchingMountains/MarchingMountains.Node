var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var schools = require('./server/routes/schools');
var instruments = require('./server/routes/instruments');
// var connection = require('./server/modules/connection');
// var pg = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/schools', schools);
app.use('/instruments', instruments);

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/scripts/factories'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
