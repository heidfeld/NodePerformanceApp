var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([
      {name: 'test1', status: 'ok'},
      {name: 'test2', status: 'ok'},
      {name: 'test3', status: 'ok'},
      {name: 'test4', status: 'ok'}
      ]);
});

module.exports = router;
