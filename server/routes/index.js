//Copied to Marching Mountains
var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require("connect-flash");


// Handles login form POST from login.html
router.post('/', function(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting signup
        if (!user) {
            return res.send({success: false, message: 'signupfailed'});
        }
        return res.send({success: true, message: 'signup succeeded'});
    })(req, res, next);

});

module.exports = router;



