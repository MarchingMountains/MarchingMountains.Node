//copied to Marching mountains
var express = require('express');
var router = express.Router();
var passport = require('passport');
var connection = require('../modules/connection');
var pg = require('pg');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        console.log("if condition:", req.user);
        res.send(req.user);
    } else {
        console.log("else condidtion:", req.user);
        // failure best handled on the server. do redirect here.
        res.send(false);
    }
});

router.get('/admin', function(req, res) {
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


module.exports = router;
