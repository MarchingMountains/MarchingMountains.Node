
var express = require('express');
var router = express.Router();
var passport = require('passport');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        res.send(req.user);
    } else {
        // failure best handled on the server. do redirect here.
        res.send(false);
    }
});


//router.get('/check', function(req, res) {
//    console.log("inside /user/check");
//    if(req.session) {
//        console.log(req.session);
//        return res.send(200);
//    } else {
//        // failure best handled on the server. do redirect here.
//        return res.send(false);
//    }
//});


module.exports = router;
