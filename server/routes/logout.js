var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', function(req, res) {
    if (req.isAuthenticated()) {
        req.logout();
        req.session.destroy();
        console.log("user logged out");
        res.redirect("/#/home");
    } else {
        console.log("user not authenticated");
    }
});

module.exports = router;
