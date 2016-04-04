//Copied to Marching Mountains
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// module with bcrypt functions
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
    console.log(req.body.username);

    var saveUser = {
        email: req.body.username,
        password: encryptLib.encryptPassword(req.body.password)
    };
        pg.connect(connection, function (err, client, done) {
            client.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING user_id, email",
                [saveUser.email, saveUser.password],
                function (err, result) {
                    client.end();
                    if (err) {
                        console.log("Error inserting data: ", err);
                        next(err);
                    } else {
                        passport.authenticate('local', function(err, user, info) {
                            if (err) {
                                console.log("err");
                                return next(err);
                            }
                            if (!user) {
                                console.log("!user");
                                return res.send(user);
                            }
                            req.logIn(user, function(err) {
                                if (err) {
                                    console.log("res.login err");
                                    return next(err)
                                }
                                console.log("res.login:", user);
                                return res.json(user);
                            });
                        })(req, res, next);
                    }
                });
        });
    console.log("inside /register req.user:", req.user);
    console.log("inside /register req.session:", req.session);

});


module.exports = router;
