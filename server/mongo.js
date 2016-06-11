var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hytit');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to mongo db');
});

module.exports = mongoose;