var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', function(err) {
    if(err) {
        console.log('connection problem on MongoDB: users', err);
    } else {
        console.log('connected to MongoDB: users');
    }
});

var userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.String},
    name: { type: mongoose.Schema.Types.String},
    surname: { type: mongoose.Schema.Types.String},
    num: { type: mongoose.Schema.Types.Number},
    birthDate: { type: mongoose.Schema.Types.Date},
    uuid: { type: mongoose.Schema.Types.String},
    age: { type: mongoose.Schema.Types.Number}
});

module.exports = mongoose.model('users_count_100000', userSchema);