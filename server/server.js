var express = require('express');
var path = require('path');
var app = express();

var host = process.env.APP_HOST || 'localhost';
var port = 8080;

var clientPath = path.join(__dirname, '../client', 'app', 'index.html');
app.use(express.static('./client'));
app.use(express.static('./client/app'));
app.use(express.static('./'));

app.get('/', function (req, res) {
    res.sendFile(clientPath);
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});