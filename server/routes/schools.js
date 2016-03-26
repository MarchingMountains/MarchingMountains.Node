var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM people ORDER BY id ASC');

        //Stream results back one row at a time
        query.on('row', function(row) {
           results.push(row);
        });

        //close connection
        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }

    });

});

module.exports = router;
