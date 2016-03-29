'use strict';

var express = require('express');
var badges = require('./controllers/badges');
var app = express();

app.use(express.json());

app.post('/', badges.save, badges.send);

app.get('/badges', badges.get);

app.listen(8000, function() {
  console.log("Server is listening on port %d", 8000);
});
