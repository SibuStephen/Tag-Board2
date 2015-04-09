var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Tag_list');


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
    console.log(result);
  }
});

module.exports = mongoose.model('Tag_list',MyTagBoardSchema);
