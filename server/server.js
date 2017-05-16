import app from './app'
import http from 'http'
import init from './socketio'
import config from './config/serverConfig'
import fs from 'fs'

const server = http.Server(app)
// const sio = init(server)

const options = {
  key: fs.readFileSync('./config/kajkai.key'),
  cert: fs.readFileSync('./config/kajkai.crt')
}

require('spdy').createServer(options, app).listen(config.PORT)
