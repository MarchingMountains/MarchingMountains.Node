//copied to Marching mountains
var express = require('express');
var router = express.Router();
var passport = require('passport');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        console.log("if condition:", req.user);
        // send back user object from database
        res.send(req.user);
    } else {
        console.log("else condidtion:", req.user);
        // failure best handled on the server. do redirect here.
        res.send(false);
    }
});


module.exports = router;
