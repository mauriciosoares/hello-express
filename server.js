'use strict';

// define modules
var express = require('express');
var api = require('./routes/api');
var routes = require('./routes');

// new express app
var app = express();

// define static files
app.use(express.static(__dirname + '/app'));
// app.all('/*', function(req, res) {
//   res.sendfile('index.html', { root: __dirname+'/app' });
// });


// routes
app.get('/', routes.index);

app.get('/api/produtos', api.produtos);

// starts server
app.listen(8888);
console.log('Listening to port 8888');