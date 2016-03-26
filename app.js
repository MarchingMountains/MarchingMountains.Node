var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var schools = require('./server/routes/schools');
var instruments = require('./server/routes/instruments');

var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
// var connection = require('./server/modules/connection');

var passport = require('./strategies/user_sql.js');
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: {maxage: 60000, secure: false}
}));

app.use('/schools', schools);
app.use('/instruments', instruments);
app.use('/register', register);
app.use('/user', user);
app.use('/', index);

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
