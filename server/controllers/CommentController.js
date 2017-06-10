import UserService from '../services/UserService.js'
import { getStore, getStoreInfoService } from '../services/StoreService'
import { getTimelyFirstComment, addNewComment, addNewSecondLayerComment, getSecondLayerComment, getFirstLayerComment } from '../services/CommentService'
import { getStoreByPostId } from '../services/StoreService'
import { emitDataToOneUser, emitDataToUser } from '../services/SocketService'
import { getPost } from '../services/StorePostService'

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

export const getGroupComment = (action, sio, io) => {
    // const data = action.data
    console.log(action)
    const id = action.data.id
    var time = (new Date()).getTime()
    if (action.data.offset)
        time = action.data.offset
    var length = 20
    if (action.data.length)
        length = action.data.length
    if (action.data.userID) {
        getStoreByPostId(action.data.id, function (store) {
            if (store) {
                getTimelyFirstComment(id, time, length, function (data) {
                    var returnData
                    const type = 'client/GET_GROUPCOMMENTS'
                    if (data) {
                        returnData = {id: id, comments: data, storeId: store._id}
                    } else {
                        returnData = {storeId: store._id}
                    }
                    getPost(id, function (storePost) {
                        emitDataToOneUser(storePost.emitId, returnData, type, action.data.userID, io)
                    })
                })
            }
        })
    }
}

export const addComment = (action, sio, io) => {
    // console.log(action.data.id)
    console.log(action.data)
    addNewComment(action.data.id, action.data, action.data.userID, action.data.storeId, function (comment) {
        if (comment) {
            const type = 'client/ADD_GROUPCOMMENTS'
            const returnData = {
                id: action.data.id,
                comment: comment
            }
            getPost(action.data.id, function (storePost) {
                emitDataToUser(storePost.emitId, returnData, type, io)
            })
        }
    })
}

export const getSubComment = (action, sio, io) => {
    var time = (new Date()).getTime()
    if (action.data.offset) time = action.data.offset
    const length = (action.data.length) ? action.data.length : 20
    sio.join(action.data.id)
    console.log('minh minh join comment nho')
    if (action.data.userID) {
        getSecondLayerComment(action.data.id, time, length, function (data) {
            if (data) {
                console.log("this shit " + data)
                const type = 'client/GET_COMMENTS'
                const returnData = {id: action.data.id, comments: data}
                getFirstLayerComment(action.data.id, function (firComment) {
                    emitDataToOneUser(firComment.emitId, returnData, type, action.data.userID, io)
                })
            }
        })
    }
}

export const addSubComment = (action, sio, io) => {
    console.log(action.data)
    addNewSecondLayerComment(action.data.id, action.data, action.data.userID, action.data.storeId, function (comment) {
        if (comment) {
            const type = 'client/ADD_COMMENTS'
            const returnData = {
                id: action.data.id,
                comment: comment
            }
            getFirstLayerComment(action.data.id, function (firComment) {
                emitDataToUser(firComment.emitId, returnData, type, io)
            })
        }
    })
}