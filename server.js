var express = require('express');
var mongoose = require('mongoose');
var application = express();

// mongoose.connect('mongodb:/localhost:27017/MyTag-Board');
application.use(express.static(__dirname + '/main'));
application.listen(8000);
console.log("Application is listening to port number 8080");
