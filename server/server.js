var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var host = process.env.APP_HOST || 'localhost';
var port = 8080;

var clientPath = path.join(__dirname, '../client', 'app', 'index.html');
app.use(express.static('./client'));
app.use(express.static('./client/app'));
app.use(express.static('./'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application.vnd.api+json' }));

var Task = require('./task');

app.get('/api/tasks', function (req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }

        res.json(tasks);
    });
});

app.post('/api/tasks', function (req, res) {
    var promise = Task.create({
        title: req.body.title,
        description: req.body.description
    }, function (err, task) {
        if (err) {
            res.send(err);
        }

        promise.then(function (task) {
            res.json(task);
        });
    });
});

app.get('/', function (req, res) {
    res.sendFile(clientPath);
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});