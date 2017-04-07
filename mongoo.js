var mongoose = require('mongoose');

var db = mongoose.connection;
mongoose.connect('mongodb://localhost/KAIKAI');

var schemaUser = new mongoose.Schema({
    username: String,
    phone: String,
    password: String,
    address: String
})

var schemaStore = new mongoose.Schema({
    iduser: String,
    storename: String,
    description: String,
    isship: Boolean,
    address: String,
    latitude: Number,
    longtitude: Number
});

module.exports = {
    Users : mongoose.model('user',schemaUser),
    Stores : mongoose.model('store',schemaStore)
}
