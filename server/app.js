import express from 'express'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from 'passport'
import config from './config/serverConfig'
import init from './socketio'
import allRoutes from './routes'

const app = express()

var corsOptions = {
  origin: config.getDomain(),
  credentials: true
}

app.use(compression())
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

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
