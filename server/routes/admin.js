var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.user_id === 1) {
            return next();
        }
    }
    res.send(false);
}

router.get('/schools', isLoggedIn, function(req, res) {
    var results = [];
    pg.connect(connection, function(err, client, done) {
        var query = client.query("SELECT schools.*, states.*, users.last_name, users.first_name, " +
            "json_agg(json_build_object('instrument', instruments.instrument, 'instrument_id', instruments.instrument_id)) AS instruments " +
            'FROM schools LEFT OUTER JOIN states ON schools.state_id = states.state_id ' +
            'LEFT OUTER JOIN school_instruments ON schools.school_id = school_instruments.school_id ' +
            'LEFT OUTER JOIN instruments ON instruments.instrument_id = school_instruments.instrument_id ' +
            'LEFT OUTER JOIN users ON schools.user_id = users.user_id ' +
            'GROUP BY schools.school_id, states.state_id, users.user_id ' +
            'ORDER BY schools.approved NULLS FIRST, schools.school_name ASC');
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
    })
});

router.put('/verify-school/:id', isLoggedIn, function(req, res) {
    pg.connect(connection, function(err, client, done) {
        client.query('UPDATE schools SET (approved) = ($1) WHERE school_id = $2', [req.body.approved, req.params.id], function(err) {
            client.end();
        });
        res.sendStatus(200);
    })
});

router.get('/users', isLoggedIn, function(req, res) {
    var results = [];

    pg.connect(connection, function(err, client, done) {
        var query = client.query('SELECT users.email, users.first_name, users.last_name, users.address_line1, ' +
            'users.address_line2, users.city, states.state, users.zip, phone FROM users ' +
            'LEFT OUTER JOIN states ON users.state_id = states.state_id ORDER BY last_name ASC');
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

router.get('/donations', isLoggedIn, function(req, res){
    var results = [];
    pg.connect(connection, function(err, client, done) {
        var query = client.query('SELECT school_name, instrument, date, donation_received, users.first_name, ' +
            'users.last_name, users.phone FROM donations ' +
            'JOIN instruments ON donations.instrument_id = instruments.instrument_id ' +
            'JOIN schools ON donations.school_id = schools.school_id ' +
            'JOIN users ON donations.user_id = users.user_id ' +
            'ORDER BY donations.date DESC;');
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