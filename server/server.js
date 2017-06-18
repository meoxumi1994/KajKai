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
const sio = init(server)
server.listen(8080)

// const server = require('spdy').createServer(options, app)


// sio.listen(config.PORT)
