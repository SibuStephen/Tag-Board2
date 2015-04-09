function c(s){
  console.log(s)
}
var express = require('express');
var mongoose = require('mongoose');
var application = express();
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost/Tag_list');

application.use(express.static(__dirname +'/main'));

var MyTagBoardSchema = new mongoose.Schema({

  tag_id:  String,
  tag_name: Number,
  Unit:   String,
  time: String,
  upper_value: Number,
  lowervalue: Number
});

var MyTagBoard = mongoose.model('MyTagBoard', MyTagBoardSchema , 'MyTagBoard');

MyTagBoard.find(function(err, result){
  if(err){
    c("Error: " + err);
  }else{
    c(result);
  }
});

module.exports = mongoose.model('Tag_list',MyTagBoardSchema);

application.get('/index.html',function(req, res) {

        res.send(MyTagBoard);

    });


application.listen(8001);

console.log("Application is listening to port number 8080");
