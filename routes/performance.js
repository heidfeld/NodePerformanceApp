var express = require('express');
var router = express.Router();
//var Entity = require('../utils/db.js')
var Entity = require('../utils/dijkstra_db.js')
var graph = require('../utils/dijkstra.js')


router.get('/', function(req, res) {
    Entity.find(function (err, data) {
        if (err) return console.error(err);

        var g = new graph();
        data.forEach(function (item) {
           g.addVertex(item.name, item.nodes);
        });

        let result = g.shortestPath('Node_2', 'Node_7').concat(['Node_2']).reverse();

        console.log(result);

        res.json(result);
    })
});

module.exports = router;
