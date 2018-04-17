var express = require('express');
var router = express.Router();
var User = require('../utils/db.js')
var dijkstra = require('../utils/dijkstra.js')

router.get('/aaa', function(req, res, next) {
  res.json([
      {name: 'test1', status: 'ok'},
      {name: 'test2', status: 'ok'},
      {name: 'test3', status: 'ok'},
      {name: 'test4', status: 'ok'}
      ]);
});

router.get('/', function(req, res) {
    User.find(function (err, data) {
        if (err) return console.error(err);
        console.log(data);
        res.json(data);
    })
});

module.exports = router;
