import {updateMainPost} from '../services/StorePostService'
import {getMainPost} from '../services/StoreService'

export const joinMainPost = (action, sio, io) => {
    getMainPost(action.data.id, function (store) {
        console.log('join: ' + action.data.id)
        if (store) {
            console.log('store ' + store.mainPost.list)
            sio.join(action.data.id)
            // sio.emit('action', {type: 'client/STOREMAINPOSTXXX', data: {list: store.mainPost.list, id: action.data.id}})
            const list = store.mainPost.list
            console.log('list ' + list)
            io.to(action.data.id).emit('action', {
                type: 'client/STOREMAINPOSTXXX',
                data: {list: list, id: action.data.id}
            })
        }
    })
}

export const leaveMainPost = (action, sio) => {
    console.log('leave: ' + action.data.id)
    sio.leave(action.data.id)
}

export const updateStoreMainPost = (action, sio) => {
    console.log('update ' + JSON.stringify(action.data))
    updateMainPost(action.data.id, action.data.list, function (list) {
        console.log(list)
        if (list) {
            sio.emit('action', {type: 'client/STOREMAINPOST', data: {list: list, id: action.data.id}})
            sio.to(action.data.id).emit('action', {
                type: 'client/STOREMAINPOST',
                data: {list: list, id: action.data.id}
            })
        }
    })
}