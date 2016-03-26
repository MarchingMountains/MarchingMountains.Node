var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var pg = require('pg');
var connectionString = '';
if(process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/marchingmountains';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get

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
