function PriorityQueue () {
    this._nodes = [];

    this.enqueue = function (priority, key) {
        this._nodes.push({key: key, priority: priority });
        this.sort();
    };
    this.dequeue = function () {
        return this._nodes.shift().key;
    };
    this.sort = function () {
        this._nodes.sort(function (a, b) {
            return a.priority - b.priority;
        });
    };
    this.isEmpty = function () {
        return !this._nodes.length;
    };
}

function Graph(){
    var INFINITY = 1/0;
    this.vertices = {};
    this.iterations = 0;

    this.addVertex = function(name, edges){
        this.vertices[name] = edges;
    };

    this.getIterations = function() {
        return this.iterations;
    }

    this.shortestPath = function (start, finish) {
        var nodes = new PriorityQueue(),
            distances = {},
            previous = {},
            path = [],
            smallest, vertex, neighbor, alt;

        for(vertex in this.vertices) {
            this.iterations = this.iterations+1;
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(0, vertex);
            }
            else {
                distances[vertex] = INFINITY;
                nodes.enqueue(INFINITY, vertex);
            }
            previous[vertex] = null;
        }

        while(!nodes.isEmpty()) {
            this.iterations = this.iterations+1;
            smallest = nodes.dequeue();
            if(smallest === finish) {
                path = [];
                while(previous[smallest]) {
                    this.iterations = this.iterations+1;
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(!smallest || distances[smallest] === INFINITY){
                continue;
            }

            for(neighbor in this.vertices[smallest]) {
                this.iterations = this.iterations+1;
                alt = distances[smallest] + this.vertices[smallest][neighbor];

                if(alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;

                    nodes.enqueue(alt, neighbor);
                }
            }
        }
        return path;
    };
}

module.exports = Graph;