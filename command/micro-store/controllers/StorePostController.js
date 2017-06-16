import { updatePost, addPostService } from '../services/StorePostService'

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
        const storeId = req.body.storeId
        const type = req.body.type
        const list = req.body.list
        addPostService(storeId, list, type, function (data) {
            if (!data) {
                res.json({status: 'failed'})
            } else {
                res.json({status: 'success', post: data})
            }
        })
    }
}

