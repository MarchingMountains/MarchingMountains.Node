var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.get('/instruments/:id', function(req, res){
  console.log('req.params: ', req.params);
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT * FROM schools JOIN school_instruments ON ' +
      'schools.school_id = school_instruments.school_id WHERE school_instruments.instrument_id = $1;',
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
