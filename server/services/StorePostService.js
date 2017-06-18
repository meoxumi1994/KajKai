import {StorePost, StorePostDetail} from '../models'
import {getMainPost} from './StoreService'
import {getListPostDetail} from './StorePostDetailService'
import { getStore } from './StoreService'

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
    var post = new StorePost({storeId: storeId, list: detailList, type: 'REGULAR'})
    post.save(function (err) {
        if (err) next(null)
        else next(post)
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