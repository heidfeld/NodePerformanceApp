var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dijkstra', function(err) {
    if(err) {
        console.log('connection problem on MongoDB: dijkstra', err);
    } else {
        console.log('connected to MongoDB: dijkstra');
    }
});

var graphSchema = new mongoose.Schema({
    _id: { type: String},
    name: { type: String},
    nodes: {type: mongoose.Schema.Types.Mixed}
});

module.exports = mongoose.model('dijkstra_nodes_3000', graphSchema);