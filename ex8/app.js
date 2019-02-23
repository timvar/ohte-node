/*
Implement node.js application, which prints to the screen "Hello World" 
from the program without variables. Take into account all the syntax and 
semantics learned from previous exercises. Create your own web server and 
ask teacher for port allocation, so each instance has it's own port. 
Through require-syntax it is only needed to add http "system" library.
*/

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end(); 
}).listen(8080);