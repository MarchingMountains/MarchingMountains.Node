var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Route includes
var account = require('./server/routes/account');
var states = require('./server/routes/states');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/account', account);
app.use('/states', states);

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
