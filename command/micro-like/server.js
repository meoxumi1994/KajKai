import app from './app'
import http from 'http'
import { config } from './config/commonConfig'

const server = http.Server(app)
server.listen(config.PORT)
