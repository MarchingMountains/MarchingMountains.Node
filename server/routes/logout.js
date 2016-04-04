var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', function(req, res) {
    if (req.isAuthenticated()) {
        console.log(req.user);
        req.logout();
        req.session.destroy();
        console.log(req.user);
        console.log(req.session);
        res.redirect("/#/home");
    } else {
        console.log("user not authenticated");
    }
});

module.exports = router;
