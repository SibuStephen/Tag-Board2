
var application = require('express')();
// var server = require('http').Server(application)
httpUse = require('http').createServer(application),
io = require('socket.io')(httpUse),


application.get('/',function(req,res)
{
  res.sendFile(__dirname +'/socket.html');
});

io.on('connection',function(socket)
{

socket.emit("Hie",{hello:"from server"});

socket.on('events',function(data)
{
 console.log(data);
});

});

httpUse.listen(8009);
console.log("I'm listening");
