require('newrelic');

function c(s)

{

  console.log(s)

}
  // require('socket.io');
  // var server2 = require('server2');
  var express = require('express');
  var mongoose = require('mongoose');
  var application = express();
  var autoIncrement = require('mongoose-auto-increment');
  var bodyParser    =  require("body-parser");
  var io = mongoose.connect('mongodb://localhost/Tag_list');
  var cheerio = require('cheerio');
  var  httpUse = require('http').createServer(application),
   socket_connector = require('socket.io')(httpUse)
  // var   sockets = require('socket.io').listen(httpUse),
  //  // feed = require('./feed');

  application.use(express.static(__dirname +'/main'));
  // application.use(bodyParser.urlencoded({ extended: false }))

//Socket demo


/*****Demo's *****/
 // application.use(express.vhost('localhost:3000', .application));
 // application.use(express.vhost('localhost:8000', require('s2').application));

  var MyTagBoardSchema = new mongoose.Schema({

    tag_id:  String,
    Unit:   String,
    time: String,
    upper_value: Number,
    lowervalue: Number,
    tag_name: String
  });

  var MyTagBoard = mongoose.model('MyTagBoard', MyTagBoardSchema , 'MyTagBoard');

  MyTagBoard.find(function(err, result)
  {
    if(err)

    {
      c("Error: " + err);
    }
    else

    {

    }
  });

 data = {};

   application.get('/index', function(req, res)
   {

      MyTagBoard.find(function(err, todos)

       {

           if (err)

          res.send(err);


         var d = Math.floor(Math.random()*100);

         // var det = setInterval(d,300);
         // console.log(req.body.reactReference);

          // $a = cheerio.load('<a class="detail_tag_name"></a>');

          application.get('/index.html')

           socket_connector.on('connection',function(socket)

          {

            socket.emit("Hie",{value:d});

          });

          // console.log($a);

          for (var ty = 0 ; ty < todos.length;ty++)
           {

             todos[ty].tag_name = d;

           }

           socket_connector.emit("Hie",{hello:d});

            socket_connector.on('Hey from client',function(data)
            {
             console.log(data);
            });


           res.json(todos);
        });
    });

    socket_connector.on('connection',function(socket)

          {
            socket.on('Hie', function (data) {

              console.log(data);

            });
            socket.emit('Hie',{hello:"d"});

          });
  //  application.post('/stores.json',function(req,res){

  //    res.send("I'm here");
  //    stores = '';
  //    sds = '';
  //    unit_converted= '';
  //    tag_id_converted = '';
  //   // res.writeHead(200, {"Content-Type": "text/json"});

  //   req.on('data', function(data) {
  //       stores += data;
  //   });

  //   req.on('end', function() {

  //       sds = JSON.parse(stores);

  //       c(sds);

  //     MyTagBoard.find(function(tag_id){

  //       if(tag_id == sds.tag_id)

  //       {
  //             MyTagBoard.update({

  //               tag_id : sds.tag_id,
  //               lowervalue: sds.lowervalue,
  //               upper_value:sds.upper_value

  //          });
  //       }

  //    })

  //   });
  // });
  //  application.get('/index.json', function(req, res)
  //  {

  //       MyTagBoard.create(function(err, todos)

  //       {
  //           // if there is an error retrieving, send the error. nothing after res.send(err) will execute
  //           if (err)
  //               res.send(err)

  //           res.json(todos);

  //       });

  //   });

  application.get('/tag_names.json',function(req,res)
  {
     res.send("got the tag_id");

  });
   application.post('/store.json', function(req,res)
   {

     store = '';
     sd = '';

    req.on('data', function(data) {
        store += data;
    });

    req.on('end', function()
    {

        sd = JSON.parse(store);
        c(sd.classed);

      MyTagBoard.create(

     {

        Unit: sd.Unit,
        tag_id: sd.tag_id,
        lowervalue: sd.lowervalue,
        tag_name: sd.tag_name,
        time:   sd.time,
        upper_value: sd.upper_value,
        class_icon: sd.class_icon,
        classed: sd.classed
     });

    });

        MyTagBoard.create(function(err, todos)

        {

            if (err)
                res.send(err)

            res.json(todos);

        });
});

httpUse.listen(8004);

console.log("Application is listening to port number 8080");
