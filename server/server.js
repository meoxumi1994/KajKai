import app from './app'
import http from 'http'
import init from './socketio'
import config from './config/serverConfig'

const server = http.Server(app)
const sio = init(server)

server.listen(config.PORT)
