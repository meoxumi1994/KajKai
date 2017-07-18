import socketIo from 'socket.io'
import allEvents from './events'
import { authoriseToken } from '../controllers/SocketPubController'

const sockListen = (user, socket, io) => {
    for(let e in allEvents){
        let handler = allEvents[e];
        let method = require('../controllers/' + handler.controller)[handler.method];
        socket.removeListener(e, method);
        socket.on(e, (action) => {
            console.log('action' + JSON.stringify(action));
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

        socket.on('server/sendToken', (action) => {
            const token = action.tokenId;
            console.log('fuck token ' + token);

            if (token) {
                console.log('token socket' + token);
                authoriseToken(token, (user) => {
                    if (user) {
                        console.log('user ' + JSON.stringify(user));
                        socket.join(user.id);
                        sockListen(user, socket, sio);
                    } else sockListen(null, socket, sio)
                })
            } else {
                sockListen(null, socket, sio)
            }
        })
    });
    return sio
};

export default init