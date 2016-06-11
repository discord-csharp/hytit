var mongoose = require('./mongo');

module.exports = Task = mongoose.model('Task', {
    title: String,
    description: String
});