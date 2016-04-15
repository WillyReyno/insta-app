var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(8080);

console.log('App started');