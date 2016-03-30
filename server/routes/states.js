var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');
var connection = require('../../modules/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res) {


    var results = [];

    pg.connect(connection, function(err, client, done) {
        var query = client.query('SELECT * FROM states;');

        //Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        //close connection
        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }

    });
});

module.exports = router;
