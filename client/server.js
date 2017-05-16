var express = require("express")
var app = express()
var fs = require('fs')

app.use(express.static(__dirname + '/'))

app.get('*',function(req, res){
  res.sendFile(__dirname + '/index.html')
})

var options = {
  key: fs.readFileSync('./config/kajkai.key'),
  cert: fs.readFileSync('./config/kajkai.crt')
}

require('spdy').createServer(options, app).listen(3000)
