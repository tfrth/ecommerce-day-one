var Express = require('express');
var Mongoose = require('mongoose');
var BodyParser = require('body-parser');
var app = express();

app.use(BodyParser.json());

var mongoUri = "mongodb://localhost:27017/ecommerce-day-one"
























var port = 9000;

app.listen(port, function(){
	console.log("Listening on port " + port);
});