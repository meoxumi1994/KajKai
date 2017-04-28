import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import path from 'path'
import config from './config/serverConfig'

require('./config/passport')(passport);

import init from './socketio'
import allRoutes from './routes'

const app = express()
var whitelist = ['http://localhost:' + config.OTHERPORT, 'http://34.209.206.70:' + config.OTHERPORT,
'http://kajkai.com:' + config.OTHERPORT]
// var serveraddress = config.getDomain()



var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

// app.use(cors())
app.use(cors(corsOptions));

// app.options('*', cors())
// app.use(cors({ credentials: true }));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(passport.initialize());
app.use('/static', express.static(path.resolve(__dirname, '../client/dist')))

app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook'),
  	function(req, res) {
  		// console.log('success ' + req.token);

  		console.log('hello');
  		//res.json({hello: "hello"});
  		res.cookie('token', req.token, { maxAge: 10000000})
  		res.redirect(config.REDIRECTURL)
    	// res.sendFile(__dirname + '/index.html')
  	}
);

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  	function(req, res) {
  		console.log('hello');
  		//res.json({hello: "hello"});
  		res.cookie('token', req.token, { maxAge: 10000000})
  		res.redirect(config.REDIRECTURL)
  	}
);

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.post('/login',
  	passport.authenticate('local'),
  	function(req, res) {
      // console.log(req.token + ' ' + res.token)
     	if (req.token) {
        	res.cookie('token', req.token, { maxAge: 10000000})
        	console.log(req.token);
        	res.json({
          		type : 'SUCCESS'
        	})
      	} else {
        	res.json({
          		type : 'FAILED'
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





export default app
