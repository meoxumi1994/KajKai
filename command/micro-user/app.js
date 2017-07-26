import express from 'express'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import config from './config/commonConfig'
import allRoutes from './routes'

const app = express()

const corsOptions = {
    origin: config.getClientDomain(),
    credentials: true
}

// app.use(compression())
// app.use(cors(corsOptions))
app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'https://admin.kajkai.com']
  const origin = req.headers.origin
  if(allowedOrigins.indexOf(origin) > -1) {
       res.set('Access-Control-Allow-Origin', origin)
  }
  res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.append('Access-Control-Allow-Credentials', true)
  next()
})
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
