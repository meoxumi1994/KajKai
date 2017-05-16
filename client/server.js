<<<<<<< HEAD
var express = require("express")
var app = express()
var fs = require('fs')
=======
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
>>>>>>> 2886481067b89c07c045d67fe42de5bfaea533ad

app.use(express.static(__dirname + '/'))

app.get('*',function(req, res){
  res.sendFile(__dirname + '/index.html')
})

<<<<<<< HEAD
var options = {
  key: fs.readFileSync('./config/kajkai.key'),
  cert: fs.readFileSync('./config/kajkai.crt')
}

require('spdy').createServer(options, app).listen(3000)
=======
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(3000)
// app.listen(3000)
>>>>>>> 2886481067b89c07c045d67fe42de5bfaea533ad
