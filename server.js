var express = require('express');
var mongoose = require('mongoose');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');

var app = express();

app.listen(8080);