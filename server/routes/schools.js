var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.post('/', function(req, res) {
    var results = [];
    var newSchool = {
        name: req.body.name,
        website: req.body.website,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        state_id: req.body.state_id,
        zip: req.body.zip,
        phone: req.body.phone,
        instructions: req.body.instructions,
        user_id: req.body.user_id
    };

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('INSERT INTO animals (school_name, website, address_line1, address_line2, city,' +
            ' state_id, zip, phone, instructions, user_id) VALUES ($1, $2, $3, $4)', newSchool);
        query.on('row', function(row) {results.push(row);});
        query.on('end', function() {
            done();
            return res.json(results);
        });
        if(err) {
            console.log(err);
        }
    });
});

module.exports = router;