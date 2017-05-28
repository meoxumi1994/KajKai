import {updateMainPost} from '../services/StorePostService'


export const joinMainPost = (action, sio) => {
    console.log('join: ' + action.data.id)
    sio.join(action.id)
}

export const leaveMainPost = (action, sio) => {
    console.log('leave: ' + action.data.id)
    sio.leave(action)
}

export const updateStoreMainPost = (action, sio) => {
    console.log('update ' + JSON.stringify(action.data))
    updateMainPost(action.data.id, action.data.list, function (list) {
        sio.emit('action', {type: 'client/STOREMAINPOST', data: {list: list, id: action.data.id}})
        sio.to(action.data.id).emit('action', {type: 'client/STOREMAINPOST', data: {list: list, id: action.data.id}})
    })
}