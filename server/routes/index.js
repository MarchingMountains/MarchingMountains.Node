//Copied to Marching Mountains
var express = require('express');
var express = require('express');
var router = express.Router();
var passport = require('passport');



// Handles login form POST from login.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/views/index.html',
        failureRedirect: '/views/failure.html'
    })
);

module.exports = router;





