
var express = require('express');
var router = express.Router();
var passport = require('passport');



// Handles login form POST from login.html
router.post('/', function(req, res, next) {
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
});

module.exports = router;





