var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(public));

app.listen(3000, function(req, res){
    console.log('Server created');
});