var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var http = require('https').Server(app);
var io = require('socket.io')(http)

var mongoo = require('./mongoo')

var Users = mongoo.Users;
var Stores = mongoo.Stores;

var passport = require('./passport')(app,Users)
var ensureLogged = require('connect-ensure-login')

app.use(express.static('public'));
app.use(require('morgan')('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());


// app = require('./server/home')(app,ensureLogged)
app = require('./server/login')(app,passport,Users,__dirname,ensureLogged)
// app = require('./server/storelogin')(app,ensureLogged,Stores)

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.listen(3333)
