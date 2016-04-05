
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');

passport.serializeUser(function(user, done) {

    //console.log('serializeUser()');
    done(null, user);
});

passport.deserializeUser(function(id, done) {
//TODO SQL query
//    console.log('deserializeUser()', id);
    pg.connect(connection, function (err, client) {

        var user = {};
        //console.log('called deserializeUser - pg');
        var query = client.query("SELECT * FROM users WHERE user_id = $1", [id.user_id]);

        query.on('row', function (row) {
            //console.log('User row', row);
            user = row;
            done(null, user);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

// Does actual work of logging in
passport.use('local', new localStrategy({
        passReqToCallback: true,
        emailField: 'email'
    }, function(req, username, password, done) {

        //console.log('In passport local strategy - email=' + username);
        pg.connect(connection, function (err, client) {
            //console.log('called local - pg');
            var user = {};

            var query = client.query("SELECT * FROM users WHERE email = $1", [username], function (err, result) {
                if (result.rows.length === 0) {
                    done(null, false, {message: 'Incorrect credentials.'});
                }
                query.on('row', function (row) {
                    //console.log('User obj', row);
                    user = row;
                    // Hash and compare
                    if (encryptLib.comparePassword(password, user.password)) {
                        // all good!
                        //console.log('matched');
                        done(null, user);
                    } else {
                        //console.log('nope');
                        done(null, false, {message: 'Incorrect credentials.'});
                    }

                });

                // After all data is returned, close connection and return results
                query.on('end', function () {
                    client.end();
                });

                // Handle Errors
                if (err) {
                    console.log(err);
                }
            });
        })
    }
));

module.exports = passport;