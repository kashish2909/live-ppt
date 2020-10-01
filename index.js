var express = require('express');
var socket=require('socket.io');
var app=express();

const PORT= process.env.PORT || 4000;
var server=app.listen(PORT,function () {
//console.log(`listening ${ PORT }`);
});


app.use(express.static('public'));

var io=socket(server);

io.on('connection',function(socket){
    //console.log('made socket connection');

    socket.on('change',function(data)
    {
        io.sockets.emit('change',data);
    });
});
