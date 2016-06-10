var express = require('express');
var path = require('path');
var app = express();

var host = process.env.APP_HOST || 'localhost';
var port = 8080;
var publicPath = path.resolve(__dirname, 'app');
var assetPath = path.resolve(__dirname, 'assets');

app.use(express.static(publicPath));
app.use(express.static(assetPath));

app.get('/*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});