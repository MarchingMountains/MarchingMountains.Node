var express = require('express');
var app = express();
var path = require('path');
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');
var connection = require('./modules/connection');
//var flash = require("connect-flash");

var logout = require('./routes/logout');
var schools = require('./routes/schools');
var instruments = require('./routes/instruments');
var donations = require('./routes/donations');
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
var passport = require('./strategies/user_sql.js');
var session = require('express-session');
var account = require('./routes/account');
var states = require('./routes/states');
var admin = require('./routes/admin');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: {maxage: 360000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

//incoming routes
app.use('/account', account);
app.use('/states', states);
app.use('/schools', schools);
app.use('/instruments', instruments);
app.use('/donations', donations);
app.use('/register', register);
app.use('/user', user);
app.use('/logout', logout);
app.use('/admin', admin);
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
