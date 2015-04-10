function c(s){
  console.log(s)
}
var express = require('express');
var mongoose = require('mongoose');
var application = express();
var autoIncrement = require('mongoose-auto-increment');

var io = mongoose.connect('mongodb://localhost/Tag_list');

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
    // c(result);
  }
});
/*ssssssss*/
   application.get('/index', function(req, res) {

        // use mongoose to get all todos in the database
        MyTagBoard.find(function(err, todos)
        {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos);
            // c(todos);
        });
  });
   application.post('/tag', function(req, res) {
    console.log(res);
    MyTagBoard.create({
      tag_id:  res.body.tag_id,
      tag_name: res.body.tag_name,
      Unit:   res.unit,
      time: res.body.time,
    });
        // // use mongoose to get all todos in the database
        // MyTagBoard.create(function(err, todos)
        // {

        //     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        //     if (err)
        //         res.send(err)

        //     res.json(todos);
        //     // c(todos);
        // });
  });
/*ssssssss*/

// module.exports = mongoose.model('Tag_list',MyTagBoardSchema);

// application.get('/index.html',function(req, res) {

//         res.send(MyTagBoard);

//     });


application.listen(8000);

console.log("Application is listening to port number 8080");
