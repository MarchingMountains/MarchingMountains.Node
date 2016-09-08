var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var clientErrorHandler = require('./modules/clientErrorHandler');
var helmet = require('helmet');
var express_enforces_ssl = require('express-enforces-ssl');


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

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV!== undefined){
	app.enable('trust proxy');
	app.use(express_enforces_ssl());
}

var ninetyDaysInMilliseconds = 7776000000;
app.use(helmet.hsts(
	{ 
		maxAge: ninetyDaysInMilliseconds, 
		setIf: function() {
    		return (process.env.NODE_ENV);  
    	} 
    }));

// Don't allow me to be in ANY frames:
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

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
app.use('/api/account', account);
app.use('/api/states', states);
app.use('/api/schools', schools);
app.use('/api/instruments', instruments);
app.use('/api/donations', donations);
app.use('/api/register', register);
app.use('/api/user', user);
app.use('/api/logout', logout);
app.use('/api/admin', admin);
app.use('/', index);


app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/views/templates'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/scripts/factories'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });
app.use(clientErrorHandler);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
