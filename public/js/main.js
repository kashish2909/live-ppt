// var socket=io.connect("http://localhost:4000");

// document.addEventListener('keypress', function (key) {
//     var keycode = key.keyCode;
//     console.log("key pressed");
//     socket.emit('change', {
//         trigger: keycode
//     });
// });


// socket.on('change',function(data)
// {
//     if(data.trigger==81)
//     {
//         console.log("hi");
//         navigateLeft();
//     }
//     if(data.trigger==87)
//     {
//         navigateRight();
//     }
//     if(data.trigger==104)
//     {
//         navigateUp();
//     }
//     if(data.trigger==98)
//     {
//         navigateDown();
//     }
//     if(data.trigger==96)
//     {
//         slide(0,0);
//     }
//     if(data.trigger==107)
//     {
//         enterFullscreen();
//     }
//     if(data.trigger==109)
//     {
//         overview();
//     }
// });