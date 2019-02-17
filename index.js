var express = require('express');
var socket=require('socket.io');
var app=express();

var server=app.listen(process.env.PORT || 4000,function () {
console.log('listening 4000');
})


app.use(express.static('public/reveal.js'));

var io=socket(server);

io.on('connection',function(socket){
    console.log('made socket connection');

    socket.on('change',function(data)
    {
        console.log("on server side");
        io.sockets.emit('change',data);
    });
});