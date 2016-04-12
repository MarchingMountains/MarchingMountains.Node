var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            console.log("err");
            return next(err);
        }
        if (!user) {
            return res.send(user);
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            return res.json(user);
        });
    })(req, res, next);
});

module.exports = router;
