import socketIo from 'socket.io'
import allEvents from './events'
import { authoriseToken } from '../controllers/SocketPubController'
import { getUnreadMessageCon } from '../controllers/ChatController'
import { getFollowListPub } from '../controllers/FollowPubController'

let myIO = null;

const sockListen = (user, socket, io) => {
    if (user) {
        getFollowListPub(user.id, (list) => {
            console.log('followeeList: ' + JSON.stringify(list));
            if (list !== null && list.length > 0) {
                for (let i = 0; i < list.length; ++i) {
                    socket.join(list[i]);
                }
            }
        })
    }

    for(let e in allEvents){
        let handler = allEvents[e];
        let method = require('../controllers/' + handler.controller)[handler.method];
        socket.removeListener(e, method);
    }

    for(let e in allEvents){
        let handler = allEvents[e];
        let method = require('../controllers/' + handler.controller)[handler.method];
        socket.removeListener(e, method);
        socket.on(e, (action) => {
            if (user) {
                if (action.data) {
                    action.data = {...action.data, user: user, userID: user.id}
                } else {
                    action.data = {user: user, userID: user.id}
                }
            }
            console.log('action' + JSON.stringify(action));
            method(action, socket, io)
        })
    }
};

const init = (server) => {
    if (myIO) return myIO;
    const sio = socketIo(server);
    console.log('SOCKET CALLED');
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
                        getUnreadMessageCon(user.id, socket, sio);
                    } else sockListen(null, socket, sio)
                })
            } else {
                sockListen(null, socket, sio)
            }
        })
    });
    myIO = sio;
    return sio;
};

// export myIO;
export default init;
