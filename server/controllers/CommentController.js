import UserService from '../services/UserService.js'
import { User } from '../models'
import { getStore, getStoreInfoService } from '../services/StoreService'
import { getTimelyFirstComment, addNewComment, addNewSecondLayerComment, getSecondLayerComment } from '../services/CommentService'
import { getStoreByPostId } from '../services/StoreService'
import { emitDataToOneUser } from '../services/SocketService'

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

export const joinGroupComment = (action, sio, io) => {
    // const data = action.data
    console.log(action)
    const id = action.data.id
    var time = (new Date()).getTime()
    if (action.data.offset) time = action.data.offset
    var length = 20
    if (action.data.length) length = action.data.length
    sio.join(action.data.id)

    getStoreByPostId(action.data.id, function (store) {
        if (store) {
            getTimelyFirstComment(id, time, length, function (data) {
                var returnData
                const type = 'client/JOIN_GROUPCOMMENTS'
                if (data) {
                    returnData = {id: id, comments: data, storeId: store._id}
                } else {
                    returnData = {storeId: store._id}
                }
                emitDataToOneUser()
            })
        }
    })
}

export const leaveGroupComment = (action, sio, io) => {
    sio.leave(action.data.id)
}

export const addComment = (action, sio, io) => {
    // console.log(action.data.id)
    console.log(action.data)
    addNewComment(action.data.id, action.data, action.data.userID, action.data.storeId, function (comment) {
        if (comment) {
            io.to(action.data.id).emit('action', {type: 'client/ADD_GROUPCOMMENTS', data: {
                id: action.data.id,
                comment: comment
            }})
            // sio.emit('action', {type: 'client/ADD_GROUPCOMMENTS', data: {
            //     id: action.data.id,
            //     comment: comment
            // }})
        }
    })
}

export const joinComment = (action, sio, io) => {
    var time = (new Date()).getTime()
    if (action.data.offset) time = action.data.offset
    const length = (action.data.length) ? action.data.length : 20
    sio.join(action.data.id)
    console.log('minh minh join comment nho')
    getSecondLayerComment(action.data.id, time, length, function(data){
        if (data) {
            console.log("this shit " + data)
            sio.emit('action', {type: 'client/JOIN_COMMENTS', data: {
                id: action.data.id,
                comments: data
            }})
        }
    })
}

export const leaveComment = (action, sio, io) => {
    sio.leave(action.data.id)
}

export const addSubComment = (action, sio, io) => {
    console.log(action.data)
    addNewSecondLayerComment(action.data.id, action.data, action.data.userID, action.data.storeId, function (comment) {
        if (comment) {
            io.to(action.data.id).emit('action', {type: 'client/ADD_COMMENTS', data: {
                id: action.data.id,
                comment: comment
            }})
            // sio.emit('action', {type: 'client/ADD_COMMENTS', data: {
            //     id: action.data.id,
            //     comment: comment
            // }})
        }
    })
}