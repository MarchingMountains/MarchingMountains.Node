var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.get('/:id', function(req, res) {
    var results = [];
    var directorID = req.params.id;

    pg.connect(connection, function(err, client, done) {
        var query = client.query("SELECT schools.*, states.*, " +
            "json_agg(json_build_object('instrument', instruments.instrument, 'instrument_id', instruments.instrument_id)) AS instruments " +
            'FROM schools JOIN states ON schools.state_id = states.state_id ' +
            'LEFT OUTER JOIN school_instruments ON schools.school_id = school_instruments.school_id ' +
            'LEFT OUTER JOIN instruments ON instruments.instrument_id = school_instruments.instrument_id ' +
            'WHERE schools.user_id = $1 GROUP BY schools.school_id, states.state_id ' +
            'ORDER BY schools.school_name ASC', directorID);
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

    var instruments = req.body.instruments;

    pg.connect(connection, function(err, client, done) {
        client.query('INSERT INTO schools ' +
            '(school_name, website, address_line1, address_line2, city, state_id, zip, phone, instructions, user_id) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING school_id', newSchool, function(err, result) {
            var school_id = result.rows[0].school_id;
            for (var i = 0; i < instruments.length; i++) {
                var instrument_id = instruments[i].instrument_id;
                client.query('INSERT INTO school_instruments (instrument_id, school_id) VALUES ($1, $2)', [instrument_id, school_id], function(err, result) {
                    if ((i + 1) == instruments.length) {
                        client.end();
                    }
                });
            }
        });
        res.sendStatus(200);
    });
});

router.put('/:id', function(req, res) {
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

    var instruments = req.body.instruments;
    var school_id = req.body.school_id;

    pg.connect(connection, function(err, client, done) {
        client.query('UPDATE schools SET' +
            '(school_name, website, address_line1, address_line2, city, state_id, zip, phone, instructions, user_id) ' +
            '= ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)' +
            'WHERE school_id = $11', updateSchool, function(err) {
            client.query('DELETE FROM school_instruments WHERE school_id = $1', [school_id], function(err) {
                for (var i = 0; i < instruments.length; i++) {
                    var instrument_id = instruments[i].instrument_id;
                    client.query('INSERT INTO school_instruments (instrument_id, school_id) VALUES ($1, $2)', [instrument_id, school_id], function (err, result) {
                        if ((i + 1) == instruments.length) {
                            client.end();
                        }
                    });
                }
            });
        });
        res.sendStatus(200);
    });
});

router.get('/instruments/:id', function(req, res){
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
