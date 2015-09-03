var express     = require('express'),
 path           = require('path'),
 logger         = require('morgan'),
 bodyParser     = require('body-parser'),
 swig           = require('swig'),
 React          = require('react'),
 Router         = require('react-router'),
 routes         = require('./app/routes'),
 passport       = require('passport'),
 mongoose       = require('mongoose'),
 cookieParser   = require('cookie-parser'),
 LocalStrategy  = require('passport-local').Strategy,
 //route          = require('./routes/index'),
 users          = require('./routes/users');

 var app = express();

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

/*app.use(cookieParser());
app.use(require('express-session')({ 
	key:'mm',
    secret: 'jumbledmess',
    resave: false,
    saveUninitialized: false
}));*/

// Initialize Passport and restore authentication state, if any, from the session.
//app.use(passport.initialize());
//app.use(passport.session());

//Routes
//app.use('/', route);  
//app.use('/users', users);

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
}); 


// passport config
//var Account = require('./models/account');
//passport.use(new LocalStrategy(Account.authenticate()));
//passport.serializeUser(Account.serializeUser());
//passport.deserializeUser(Account.deserializeUser());

// mongoose
//mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port')); 
});