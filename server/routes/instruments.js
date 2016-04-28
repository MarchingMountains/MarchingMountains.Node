var express = require('express');
var router = express.Router();
var connection = require('../modules/connection');
var pg = require('pg');

router.get('/', function(req, res) {
  var results = [];
  pg.connect(connection, function(err, client, done) {
    var query = client.query('SELECT * FROM instruments ORDER BY instrument ASC');
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

router.post('/', function(req, res) {
  pg.connect(connection, function(err, client, done) {
    client.query('INSERT INTO instruments (instrument) VALUES ($1)', [req.body.instrument], function (err) {
      client.end();
      res.sendStatus(200);
      if (err) {
        console.log(err);
      }
    });
  });
});

router.put('/:id', function(req, res) {
  pg.connect(connection, function(err, client, done) {
    client.query('UPDATE instruments SET (instrument, active) = ($1, $2) WHERE instrument_id = $3',
    [req.body.instrument, req.body.active, req.params.id], function(err) {
      client.end();
      res.sendStatus(200);
    });
  });
});

router.delete('/:id', function(req, res) {
  pg.connect(connection, function(err, client, done) {
    client.query('DELETE FROM instruments WHERE instrument_id = $1', [req.params.id], function(err) {
      client.query('DELETE FROM school_instruments WHERE instrument_id = $1', [req.params.id], function(err) {
        client.end();
        res.sendStatus(200);
      });
    });
  });
});

module.exports = router;
