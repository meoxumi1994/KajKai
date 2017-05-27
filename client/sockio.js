var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

console.log('socket server start')
// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'HELLO WORLD' });
  socket.on('my other event', function (data) {
    console.log('my other event: ',data);
  });
});
