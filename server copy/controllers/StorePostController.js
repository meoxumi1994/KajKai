import {updatePost, addPostService, getPost} from '../services/StorePostService'
import {getMainPost} from '../services/StoreService'
import {StorePostDetail} from '../models'

export const joinPost = (action, sio, io) => {
    // getMainPost(action.data.id, function (store) {
    //     console.log('join: ' + action.data.id)
    //     if (store) {
    //         console.log('store ' + store.mainPost.list)
    //         sio.join(action.data.id)
    //         // sio.emit('action', {type: 'client/STOREMAINPOSTXXX', data: {list: store.mainPost.list, id: action.data.id}})
    //         const list = store.mainPost.list
    //         console.log('list ' + list)
    //         io.to(action.data.id).emit('action', {
    //             type: 'client/STORE_POST',
    //             data: {list: list, id: action.data.id}
    //         })
    //     }
    // })
    sio.join(action.data.id)
    getPost(action.data.id, function (post) {
        if (post) {
            sio.emit('action', {type: 'client/STORE_POST', data: {list: post.list, id: post._id}})
        } else {
            sio.emit('action', {type: 'client/STORE_POST', data: {list: [], id: action.data.id}})
        }
    })
}

export const leavePost = (action, sio) => {
    console.log('leave: ' + action.data.id)
    sio.leave(action.data.id)
}

export const updateStorePost = (action, sio, io) => {
    console.log('update ' + JSON.stringify(action.data))
    updatePost(action.data.id, action.data.list, action.data.userID, function (list) {
        console.log(list)
        if (list) {
            // sio.emit('action', {type: 'client/STORE_POST', data: {list: list, id: action.data.id}})
            io.to(action.data.id).emit('action', {
                type: 'client/STORE_POST',
                data: {list: list, id: action.data.id}
            })
        }
    })
}

export const addPost = () => {
    return (req, res) => {
        console.log(req.body)
        const storeId = req.body.storeId
        const list = req.body.list
        addPostService(storeId, list, function (data) {
            if (!data) {
                res.json({status: 'failed'})
            } else {
                res.json({status: 'success', post: data})
            }
        })
    }
}