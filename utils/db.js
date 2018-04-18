var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', function(err) {
    if(err) {
        console.log('connection problem on MongoDB: users', err);
    } else {
        console.log('connected to MongoDB: users');
    }
});

var userSchema = new mongoose.Schema({
    surname: { type: String},
    name: { type: String},
    birthDate: {type: Date},
    uuid: {type: String},
    age: {type: Number}
});

module.exports = mongoose.model('users_count_1000', userSchema);
