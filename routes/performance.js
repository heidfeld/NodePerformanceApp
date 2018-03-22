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

router.get('/algorithm/1', function(req, res, next) {
    let startTime = new Date().getTime();
    let result = algorithmOne(100000000);
    let duration = new Date().getTime() - startTime;
    res.json({
        algorithm: "Algorithm 1",
        result: result,
        time: new Date().toLocaleTimeString(),
        duration: duration
    });
});

function algorithmOne(num){
    let res = Math.floor((Math.random() * 1000) + 1);
    for (let i = 0; i < num; ++i) {
        res = res + (i/2);
    }
    return res;
}

module.exports = router;
