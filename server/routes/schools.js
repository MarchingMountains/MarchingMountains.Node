var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.get('/:id', function(req, res) {
    var results = [];
    var directorID = req.params.id;

    pg.connect(connection, function(err, client, done) {
        var query = client.query('SELECT * FROM schools WHERE user_id = $1 ORDER BY school_name ASC', directorID);
        query.on('row', function(row) {
            results.push(row);
        });
        query.on('end', function() {
            done();
            return res.json(results);
        });
        if(err) {
            console.log(err);
        }
    });
});

router.post('/:id', function(req, res) {
    console.log(req.body);
    var results = [];
    var newSchool = [
        req.body.name,
        req.body.website,
        req.body.address_line1,
        req.body.address_line2,
        req.body.city,
        req.body.state_id,
        req.body.zip,
        req.body.phone,
        req.body.instructions,
        req.params.id
    ];

    pg.connect(connection, function(err, client, done) {
        var query = client.query('INSERT INTO schools ' +
            '(school_name, website, address_line1, address_line2, city, state_id, zip, phone, instructions, user_id) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', newSchool);
        query.on('row', function(row) {results.push(row);});
        query.on('end', function() {
            done();
            console.log(results);
            return res.json(results);
        });
        if(err) {
            console.log(err);
        }
    });
});

router.put('/:id', function(req, res) {
    console.log(req.body);
    var results = [];
    var updateSchool = [
        req.body.name,
        req.body.website,
        req.body.address_line1,
        req.body.address_line2,
        req.body.city,
        req.body.state_id,
        req.body.zip,
        req.body.phone,
        req.body.instructions,
        req.params.id,
        req.body.school_id
    ];

    pg.connect(connection, function(err, client, done) {
        var query = client.query('UPDATE schools SET' +
            '(school_name, website, address_line1, address_line2, city, state_id, zip, phone, instructions, user_id) ' +
            '= ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)' +
            'WHERE school_id = $11', updateSchool);
        query.on('row', function(row) {results.push(row);});
        query.on('end', function() {
            done();
            console.log(results);
            return res.json(results);
        });
        if(err) {
            console.log(err);
        }
    });
});

router.get('/instruments/:id', function(req, res){
  console.log('req.params: ', req.params);
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT * FROM schools ' +
      'JOIN school_instruments ON schools.school_id = school_instruments.school_id ' +
      'JOIN states ON schools.state_id = states.state_id ' +
      'WHERE school_instruments.instrument_id = $1;',
      req.params.id);
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

module.exports = router;
