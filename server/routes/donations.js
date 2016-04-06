var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');
var api_key = 'key-9fad0a24dab479c9890b265c5c0495a3';
var domain = 'sandboxf24cc5b071a54b549d355abfc18c80b3.mailgun.org';
var Mailgun = require('mailgun-js');

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    console.log("WE ARE AUTHENTICATED IN DONATIONS.JS");
    return next();
  }
  console.log("WE ARE NOT AUTHENTICATED IN DONATIONS.JS");
  res.send(false);
}


router.get('/school/:id', function(req, res){
  console.log("DONATIONS.JS - get schools by ID - THIS ROUTE SHOULD BE OPEN");
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT * FROM donations ' +
      'JOIN instruments ON donations.instrument_id = instruments.instrument_id ' +
      'WHERE donations.school_id = $1 ORDER BY donations.date DESC;',
      [req.params.id]);
    query.on('row', function(row) {
      results.push(row);
    });
    query.on('end', function() {
      client.end();
      return res.json(results);
    });
    if(err) {
      console.log(err);
    }
  });
});

router.get('/user/:id', function(req, res){
  console.log("DONATIONS.JS, GET user by id - THIS ROUTE SHOULD BE OPEN");
  var results = [];
  console.log('/user/id', req.body);
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT school_name, instrument, date, donation_received FROM donations ' +
        'JOIN instruments ON donations.instrument_id = instruments.instrument_id ' +
        'JOIN schools ON donations.school_id = schools.school_id ' +
        'WHERE donations.user_id = $1 ORDER BY donations.date DESC;',
        [req.params.id]);
    query.on('row', function(row) {
      results.push(row);
      console.log("results HERE", results);
    });
    query.on('end', function() {
      client.end();
      return res.json(results);
    });
    if(err) {
      console.log(err);
    }
  });
});


router.get('/user/:id', function(req, res){
  console.log("DONATIONS.JS, GET user by ID - THIS ROUTE SHOULD BE OPEN");
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT school_name, instrument, date, donation_received FROM donations ' +
        'JOIN instruments ON donations.instrument_id = instruments.instrument_id ' +
        'JOIN schools ON donations.school_id = schools.school_id ' +
        'WHERE donations.user_id = $1 ORDER BY donations.date DESC;',
        [req.params.id]);
    query.on('row', function(row) {
      results.push(row);
    });
    query.on('end', function() {
      client.end();
      return res.json(results);
    });
    if(err) {
      console.log(err);
    }
  });
});

router.post('/school/:id', isLoggedIn, function(req, res) {
  console.log("DONATIONS.JS, POST schools by id");
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('INSERT INTO donations (date, donation_received, instrument_id, user_id, school_id) ' +
    'VALUES ($1, $2, $3, $4, $5)', [req.body.date, req.body.donation_received, req.body.instrument_id,
    req.body.user_id, req.body.school_id],

    function (err, result) {
      done();

      if (err) {
        console.log("Error inserting data: ", err);
        res.send(false);
      } else {
        res.send(results);
      }
    });
  });
});

router.put('/received/:id', isLoggedIn, function(req, res) {
  console.log("DONATIONS.JS, PUT received donations by id");
  console.log('req.body: ', req.params.id);
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('UPDATE donations SET (donation_received) = (true) ' +
    'WHERE donation_id = $1', [req.params.id],
    function(err, result) {
      done();
      if(err) {
        console.log("Error updating data: ", err);
        res.send(false);
      } else {
        res.send(results);
      }
    });
  });
});

router.post('/email', isLoggedIn, function(req, res) {
  console.log('trying to send email...');
  var mailgun = new Mailgun({apiKey: api_key, domain: domain});
  var data = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };

  mailgun.messages().send(data, function (err, body) {
    if (err) {
      console.log("Error inserting data: ", err);
      res.send(false);
    } else {
      console.log('sent email');
      res.send(true);
    }
  });
});

module.exports = router;
