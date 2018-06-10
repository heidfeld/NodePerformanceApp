var express = require('express');
var router = express.Router();
//var GraphEntity = require('../utils/dijkstra_db.js');
var UserEntity = require('../utils/users_db.js');
var graph = require('../utils/dijkstra.js');
var fs = require('fs');
const readline = require('readline');


/*router.post('/dijkstra/', function(req, res) {
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
});*/

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

    let userRequests = [1,2,3,4,5].map((item) => {
        return new Promise((resolve, reject) => {
            getUserAge(item, resolve, reject);
        });
    });

    let fileRequests = [1,2].map((item) => {
        if(item === 1) {
            return new Promise((resolve, reject) => {
                getNumberFromFile('public/file.txt', resolve, reject);
            });
        } else if (item === 2) {
            return new Promise((resolve, reject) => {
                getNumberFromFile('public/file2.txt', resolve, reject);
            });
        }
    });

    primeSieve(20000);
    primeSieve(25000);

    var sumAge = 0;
    Promise.all(userRequests).then((result) => sumAge = result.reduce(getSum));
    Promise.all(userRequests.concat(fileRequests)).then((values) => res.json("All values: " + values + " age sum: " + sumAge));

});

function getSum(total, num) {
    return total + num;
}

function primeSieve(n){
    var a = Array(n = n/2),
        t = (Math.sqrt(4+8*n)-2)/4,
        u = 0,
        r = [];
    for(var i = 1; i < (n-1)/3; i++) a[1+3*i] = true;
    for(var i = 2; i <= t; i++){
        u = (n-i)/(1+2*i);
        if (i%3-1) for(var j = i; j < u; j++) a[i + j + 2*i*j] = true;
    }
    for(var i = 0; i< n; i++) !a[i] && r.push(i*2+1);
    console.log("primes sieve: " + r.length);
    return r.length;
}

function getUserAge(num, resolve, reject) {
    UserEntity.findOne({ 'num': num })
        .exec()
        .then((user) => {
            console.log(user.age);
            resolve(user.age);
        })
        .catch((err) => {
            reject(err);
        })
}

function getNumberFromFile(filename, resolve, reject) {
    var stream = fs.createReadStream(filename, 'utf8');
    const lineReader = readline.createInterface({ input : stream });
    lineReader.on('line', line => {
        if(line.indexOf('25000') != -1 || line.indexOf('20000') != -1) {
            console.log(line);
            var num = parseInt(line);
            resolve(num);
        }
    });
}

module.exports = router;
