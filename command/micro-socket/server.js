import http from 'http'
import init from './socketio'
import config from './config/commonConfig'

const server = http.Server();
const sio = init.init(server);
server.listen(config.SERVER_PORT);
