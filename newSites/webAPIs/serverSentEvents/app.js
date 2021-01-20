// aus Javascript Buch Listing 12.11

'use strict'
const fs = require('fs');
const http = require('http');
const MIN = 1;
const MAX = 20;

let server = http.createServer((request, response) =>{
  if(request.headers.accept && request.headers.accept === 'text/event-stream'){
    if(request.url === '/events'){
      sendEvent(request, response);
    
    } else {
      response.writeHead(404);
      response.end();
    }
  } else {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(fs.readFyleSync(__dirname + '/index.html'));
    response.end();
  }
})
server.listen(8000);

function sendEvent(request, response){
  request.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  let id = (new Date()).toLocaleTimeString();

  setInterval(() =>{
    createServerSendEvent(response, id);
  }, 5000);

  function createServerSendEvent(response, id){
    let exercise = createRandomExercise();
    response.write('id: ', + id + '\n');
      response.write("data: ", + exercise + '\n\n');
  }

  function createRandomExercise(){
    let number1 = Math.floor(Math.random() * MAX) + MIN;
    let number2 = Math.floor(Math.random() * MAX) + MIN;
    let exercise = number1 + ' + ' + number2 + ' = ';
    return exercise;
  }

}