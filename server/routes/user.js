var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require("connect-flash");



// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        // send back user object from database
        res.send(req.user);
    } else {
        console.log("response inside user.js", response);
        // failure best handled on the server. do redirect here.
        res.send('login',{ message: req.flash('message') });
    }
});


module.exports = router;

