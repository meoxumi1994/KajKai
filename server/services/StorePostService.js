import {StorePost, StorePostDetail} from '../models'
import {getMainPost} from './StoreService'
import {getListPostDetail} from './StorePostDetailService'
import { getStore } from './StoreService'
import { createNewEmit } from './EmitDetailService'
import { addNewEmitSocketDetail } from './SocketService'

export const updatePost = (postId, list, userID, next) => {
    StorePost.findById(postId, function (err, post) {
        if (post) {
            console.log('post: ' + post + ' ' + post.storeId)
            getStore(post.storeId, function (store) {
                console.log('store: ' + store)
                if (!store || store.owner !== userID) {
                    next(null)
                } else {
                    post.list = getListPostDetail(list)
                    post.save(function (err) {
                        if (err) next(null)
                        else next(list)
                    })
                }
            })
        } else {
            next(null)
        }
    })
}

export const addPostService = (storeId, list, next) => {
    var list = req.body.list
    var detailList = []
    for (var raw in list) {
        const storePostDetail = new StorePostDetail(raw)
        detailList.push(storePostDetail)
    }
    createNewPost(storeId, (new Date()).getTime(), list, 'REGULAR', function (post) {
        next(post)
    })
}

export const getPost = (postId, next) => {
    StorePost.findById(postId, function (err, post) {
        if (err) next(null)
        else next(post)
    })
}

export const getPostList = (storeId, time, length, next) => {
    var q = StorePost.find({storeId: storeId, createdAt: {$lt: time}, type: 'REGULAR'}).sort({createdAt: -1}).limit(length)
    q.exec(function (err, data){
        if (err) next(null)
        else {
            data.sort(function (a, b) {
                return a.createdAt - b.createdAt
            })
            next(data)
        }
    })
}

export const createNewPost = (storeId, time, list, postType, next) => {
    var storePost = new StorePost({storeId: storeId, createdAt: (new Date()).getTime(), type: postType, list: list})
    createNewEmit({type: 'STORE_POST', lastTime: (new Date()).getTime()}, function (emitDetail) {
        if (!emitDetail) next(null)
        else {
            storePost.emitId = emitDetail._id
            storePost.save(function (err) {
                getStore(storeId, function (store) {
                    const owner = store.owner
                    addNewEmitSocketDetail(storePost.emitId, owner, function () {
                        next(storePost)
                    })
                })
            })
        }
    })
}