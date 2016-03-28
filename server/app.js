var express = require('express');
var app = express();
var path = require('path');
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');
var connection = require('./modules/connection');
//var flash = require("connect-flash");

var schools = require('./server/routes/schools');
var instruments = require('./server/routes/instruments');
var index = require('./server/routes/index');
var user = require('./server/routes/user');
var register = require('./server/routes/register');
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


app.use(passport.initialize());
app.use(passport.session());

//incoming routes
app.use('/schools', schools);
app.use('/instruments', instruments);
app.use('/register', register);
app.use('/user', user);
app.use('/', index);

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/views/templates'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/scripts/factories'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));

});
