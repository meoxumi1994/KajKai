import app from './app'
import http from 'http'
import init from './socketio'
import config from './config/serverConfig'
import fs from 'fs'

const server = http.Server(app)


// const options = {
//   key: fs.readFileSync('./config/kajkai.key'),
//   cert: fs.readFileSync('./config/kajkai.crt')
// }

server.listen(config.PORT)

// const server = require('spdy').createServer(options, app)
const sio = init(server)

// sio.listen(config.PORT)
