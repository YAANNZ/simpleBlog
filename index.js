var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('my first blog');
});

app.listen('3000');