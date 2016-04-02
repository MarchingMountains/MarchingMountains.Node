var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', function(req, res) {
    req.session.destroy();
    req.logout();
    res.send(res);

});

module.exports = router;