import socketIo from 'socket.io'
import allEvents from './events'
import { getTokenSocketCookie } from '../utils/utils'
import { authoriseToken } from '../controllers/SocketPubController'

const sockListen = (user, socket, io) => {
    for(let e in allEvents){
        let handler = allEvents[e];
        let method = require('../controllers/' + handler.controller)[handler.method];
        socket.on(e, (action) => {
            if (user) {
                if (action.data) {
                    action.data = {...action.data, user: user, userID: user.id}
                } else {
                    action.data = {user: user, userID: user.id}
                }
            }
            method(action, socket, io)
        })
    }
};

const init = (server) => {
    const sio = socketIo(server);
    sio.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('a user disconnected')
        });
        // get user from token
        const token =  getTokenSocketCookie(socket.handshake.headers.cookie);
        if (token) {
            authoriseToken(token, (user) => {
                if (user) sockListen(user, socket, sio);
                else sockListen(null, socket, sio)
            })
        } else {
            sockListen(null, socket, sio)
        }
    });
    return sio
};

export default init
