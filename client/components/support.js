import io from 'socket.io-client'
import config from '~/config'

export const socket = io("http://localhost:8080"); // config.getDomain()
