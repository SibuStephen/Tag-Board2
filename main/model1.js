var mongoose = require('mongoose');

var io = mongoose.connect('mongodb:/localhost/Tag-list');

autoIncrement.initialize("mongodb://localhost:27017/Tag-list");

 console.log(autoIncrement.initialize("mongodb://localhost:27017/Tag-list"))

  var Database = new mongoose.Schema('Todo', {

    tag_id:
    {
      type:String
    },
    tag_name:
    {
      type:String
    },
    Unit:
    {
      type:Number
    },
    time:
    {
      type:String
    },
    upper_value:
    {
      type:Number
    },
    lowervalue:
    {
      type: Number
    }
});

module.exports = mongoose.model('tag_list',Database);
