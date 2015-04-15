function c(s){
  console.log(s)
}
  var express = require('express');
  var mongoose = require('mongoose');
  var application = express();
  var autoIncrement = require('mongoose-auto-increment');
  var bodyParser    =  require("body-parser");
  var io = mongoose.connect('mongodb://localhost/Tag_list');
  application.use(express.static(__dirname +'/main'));
  // application.use(bodyParser.urlencoded({ extended: false }));


  var MyTagBoardSchema = new mongoose.Schema({

    tag_id:  String,
    tag_name: Number ,
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

    }
  });

   application.get('/index.json', function(req, res) {


        MyTagBoard.find(function(err, todos)
        {

            if (err)
                res.send(err)

            res.json(todos);

        });
     });

   application.post('/store.json', function(req,res) {

     store = '';
     sd = '';
     unit_converted= '';
    tag_id_converted = '';
    // res.writeHead(200, {"Content-Type": "text/json"});

    req.on('data', function(data) {
        store += data;
    });

    req.on('end', function() {

        sd = JSON.parse(store);
        // c(sd);
        // res.end(store);
        unit_converted = JSON.stringify(sd.Unit);
        tag_id_converted = JSON.stringify(sd.tag_id);

      MyTagBoard.create({

        Unit: unit_converted,
        tag_id: tag_id_converted,
        lowervalue: sd.lowervalue,
        tag_name: sd.tag_name,
        time:   sd.time,
        upper_value: sd.upper_value

     })

    });


        MyTagBoard.create(function(err, todos)

        {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos);
            c(todos);
        });

});

application.listen(8002);

console.log("Application is listening to port number 8080");
