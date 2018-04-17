var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dijkstra', function(err) {
    if(err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane');
    }
});

var graphSchema = new mongoose.Schema({
    _id: { type: String},
    name: { type: String},
    nodes: {type: mongoose.Schema.Types.Mixed}
});

module.exports = mongoose.model('dijkstra_nodes_10', graphSchema);