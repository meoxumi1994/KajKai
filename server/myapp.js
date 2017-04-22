// import cookieParser from 'cookie-parser'
var cookieParser = require('cookie-parser');
var express = require('express');
var body_parser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');
app.use(body_parser());
var passport = require('passport');
app.use(passport.initialize());
var cors = require('cors');

app.use(cors())
app.use(cookieParser())
app.use(require('./common/middlewares/auth.js')())

require('./config/passport')(passport);

app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
  	function(req, res) {
  		console.log('success ' + req.token);
    	res.sendFile(__dirname + '/index.html')
  	}
);

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  	function(req, res) {
  		console.log('success ' + req.token);
    	// res.redirect('/');
    	res.send('./index.html');
  	}
);

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.post('/server/login', 
  	passport.authenticate('local'),
  	function(req, res) {
      // console.log(req.token + ' ' + res.token)


      if (req.token) {
        res.cookie('token', req.token, { maxAge: 10000000})
        console.log(req.token);
        res.json({
          type : 'LOGIN_SUCCESS',
          token : req.token
        })
        // res.end();
      } else {
        res.json({
          type : 'LOGIN_FAILED'
          // token : ''
        })
      }
});

app.get('/', function(req, res){
  console.log('root');
})

// app.post('/server/login', function(req, res){
//   res.cookie('token', 'Minh gay', {maxAge: 1000000000});
//   // res.end();
//   res.json({
//     token: "ihihi"
//   })
// })


app.listen(6969);

