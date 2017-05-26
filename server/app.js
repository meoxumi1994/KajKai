import express from 'express'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import path from 'path'
import config from './config/serverConfig'
import init from './socketio'
import allRoutes from './routes'

import owaiejf from './services/MessageService'

const app = express()
var whitelist = ['https://localhost:' + config.OTHERPORT, 'https://34.209.206.70:' + config.OTHERPORT,
'https://www.kajkai.com', 'null']

var corsOptions = {
  // origin: function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // },
  origin: whitelist[0],
  credentials: true
}

app.use(compression())
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use('/static', express.static(path.resolve(__dirname, '../client/dist')))

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
