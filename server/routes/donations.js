var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.get('/school/:id', function(req, res){
  console.log('req.params: ', req.params);
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT * FROM donations ' +
      'JOIN instruments ON donations.instrument_id = instruments.instrument_id ' +
      'WHERE donations.school_id = $1 ORDER BY donations.date DESC;',
      req.params.id);
    query.on('row', function(row) {
      results.push(row);
    });
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
