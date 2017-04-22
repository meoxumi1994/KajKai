import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'

import init from './socketio'
import { getPath } from './common/helper'
import allRoutes from './routes'

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(passport.initialize());
app.use('/static', express.static(getPath(__dirname)('../client/dist')))


//////

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

//////




// load all routes
for(let link in allRoutes){

  let allMethods = allRoutes[link]
  for(let requestMethod in allMethods){

    let handler = allMethods[requestMethod]
    let method = require('./controllers/' + handler.controller)[handler.method]

    app[requestMethod](link, handler.middleware || [], method())
  }
}

// app.post('/server/login', function(req, res){
//   res.cookie('token', 'hihi', {maxAge: 1000000000});
//   res.end();
// })

export default app
