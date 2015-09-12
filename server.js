var express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	swig  = require('swig'),
	React = require('react'),
	Router = require('react-router'),
	routes = require('./app/routes'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	session = require('express-session');
var db = require('./db');


//===============EXPRESS================
// Configure Express
var app = express();
app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
}); 

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port')); 
});