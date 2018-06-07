var express = require('express');
var router = express.Router();
var GraphEntity = require('../utils/dijkstra_db.js');
//var UserEntity = require('../utils/users_db.js');
var graph = require('../utils/dijkstra.js');
var fs = require('fs');


router.post('/dijkstra/', function(req, res) {
    GraphEntity.find(function (err, data) {
        if (err) return console.error(err);
        var g = new graph();
        data.forEach(function (item) {
           g.addVertex(item.name, item.nodes);
        });
        var fromNode = req.query.fromNode;
        var toNode = req.query.toNode;
        console.log(g.getIterations());
        var result = g.shortestPath(fromNode, toNode).concat([fromNode]).reverse();
        console.log(g.getIterations());
        console.log(result);
        res.json(result);
    })
});

router.get('/users/id', function(req, res) {
    UserEntity.findOne({ 'num': req.query.id }, function (err, data) {
        if (err) return console.error(err);
        console.log(data);
        res.json(data);
    })
});

/*router.get('/users/random', function(req, res) {
    var randomnumber = Math.floor(Math.random() * 100000);
    UserEntity.findOne({'num': randomnumber}, function (err, data) {
        if (err) return console.error(err);
        console.log(data);
        res.json(data);
    })
});*/

router.get('/users/sequence', function(req, res) {
    const filename = 'public/file.txt';
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        var lines = data.split(/\r?\n/);
        var num = Number(lines[0]);
        res.json(num);
    });
});

module.exports = router;
