import socketIo from 'socket.io'
import allEvents from './events'
import { verifyToken } from '../services/UserService'
import {getTokenSocketCookie} from '../utils/Utils'
import {redisClient} from '../datasource'
import { getSecondLayerCommentById } from '../services/CommentService'
import { SecondLayerComment } from '../models'
import { addUserOnline, getStatusOnline, removeUserOnline } from '../services/OnlineService'
import { getUserRoomId } from '../services/SocketService'

const init = (server) => {
    const sio = socketIo(server)
    // sio.use(cookieParser())
    sio.on('connection', (socket) => {
        console.log('a user connected')
        var userID = null
        if (token) {
            var decoded = verifyToken(token)
            if (decoded)
                userID = decoded._id
        }
        if (userID) {
            addUserOnline(userID, function (reply) {
                if (reply) {
                    socket.join(getUserRoomId(userID))
                }
            })
        }


        socket.on('disconnect', () => {
            console.log('a user disconnected')
            if (userID) {
                removeUserOnline(userID, function (reply) {
                    if (reply) {
                        socket.leave(getUserRoomId(userID))
                    }
                })
            }
        })

        // load all events
        for(let e in allEvents){
            let handler = allEvents[e]
            // console.log(e)
            let method = require('../controllers/' + handler.controller)[handler.method]

            socket.on(e, (action) => {
                const token =  getTokenSocketCookie(socket.handshake.headers.cookie)
                console.log('sockettoken: ' + token)

                var userID = null
                if (token) {
                    var decoded = verifyToken(token)
                    if (decoded)
                        userID = decoded._id
                }
                console.log('me ' + userID)
                if (action.data) {
                    action.data = {...action.data, userID: userID }
                } else {
                    action.data = {userID: userID}
                }
                // if(validateTokenDemo(action.token)) {
                //     method(action, sio)
                // } else {
                //     socket.emit('action', {
                //         type: 'NOT_LOGGED_IN',

                //     })
                // }
                if (handler.controller !== 'ChatController' || userID !== null) {
                    method(action, socket, sio)
                }
            })

        }
    })
    return sio
}

export default init
