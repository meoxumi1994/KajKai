var express = require("express")
var app = express()
// var io = require('socket.io')(app);
var fs = require('fs')

app.use(express.static(__dirname + '/'))

app.get('*',function(req, res){
  res.sendFile(__dirname + '/index.html')
})

// var options = {
//   key: fs.readFileSync('./config/kajkai.key'),
//   cert: fs.readFileSync('./config/kajkai.crt')
// }

app.listen(3000)
// var server = require('spdy').createServer(options, app).listen(3000)
//
// var io = require('socket.io')(server)
// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
