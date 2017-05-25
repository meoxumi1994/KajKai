import UserService from '../services/UserService.js'
import { User } from '../models'
import {getStore, getStoreInfoService} from '../services/StoreService'

export const getTarget = () => {
    return (req, res) => {
        const id = req.body.id
        if (!id) {
            res.json({status: 'failed'})
        } else {
            UserService.getUser(id, function (user) {
                if (user) {
                    res.json({status: 'success', type: 'user',
                                user: UserService.getUserBasicInfo(user)})
                } else {
                    getStore(id, function (store) {
                        if (store) {
                            res.json({status: 'success', type: 'store',
                                store: getStoreInfoService(store)})
                        } else {
                            res.json({status: 'failed'})
                        }
                    })
                }
            })
        }
    }
}

export const handleSioDemo = (action, sio) => {
    if(action.type === 'server/SEND_MESSAGE'){
        sio.emit('action', {
            type: 'SEND_MESSAGE',
            message: action.message,
            author: action.token,
            id: Date.now()
        })
    }
}

export const textSockIO = (action, sio) => {
    // if (action.type == '') {
    console.log(action)
    console.log(sio)
        // sio.emit('hello', {
        //     abc: 'def'
        // })
    // }
    sio.join(action.hello)
}

export const transerMessage = (action, sio) => {
    console.log(action)
    sio.to(action.room).emit('nhan', action.message)
}

export const subcribe = (action, sio) => {
    sio.join(action.room)
}

export const unsubcribe = (action, sio) => {
    sio.leave(action.room)
}

export const comment = (action, sio) => {
    console.log(action)
    sio.to(action.room).emit('new_message', action.message)
}

export const testToken = (action, sio) => {
    // const token = action.token
    // UserService.verifyToken(token, function (decoded) {
    //     if (decoded) {
    //         sio.emit("server/hi", {status: 'success'})
    //     } else {
    //         sio.emit("server/hi", {status: 'failed'})
    //     }
    // })
    console.log('fick')
    sio.emit('action', {type: 'client/hi', data: 'aeofiew'})
}