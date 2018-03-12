var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title_left: 'Node.js Algorithm', title_right: 'Node.js Requests Strike' });
});

module.exports = router;
