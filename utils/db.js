var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', function(err) {
    if(err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane');
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
