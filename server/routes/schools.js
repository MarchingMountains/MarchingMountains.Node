var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.get('/:id', function(req, res) {
    var results = [];
    var directorID = req.params.id;

    pg.connect(connection, function(err, client, done) {
        var query = client.query('SELECT * FROM schools WHERE user_id = $1', directorID);
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

module.exports = router;