// Make connection
var socket = io.connect('http://volumio.local/');
  //'http://localhost:4000');

// Query DOM
var plus  = document.getElementById('plus');
var state  = document.getElementById('state');
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

      plus.addEventListener('click', function(){
        socket.emit('volume', '+');
        console.log(socket.emit);
      });
      state.addEventListener('click', function(){
        socket.emit('GetTrackInfo', '');  
      });

      socket.on('pushGetTrackInfo', function(data){
        feedback.innerHTML = ' ';
        output.innerHTML += 'data ';
    });
// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    console.log( message.value);
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('connect', function(data){
    feedback.innerHTML = ' ';
    output.innerHTML += 'data ';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});