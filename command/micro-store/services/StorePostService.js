import {StorePost, StorePostDetail} from '../models'
import { getListPostDetail } from './StorePostDetailService'
import { getStore } from './StoreService'

const POST_GLOBAL_ID = '003'

export const getPostGlobalId = (id) => {
    return POST_GLOBAL_ID + id
}

export const getPostLocalId = (id) => {
    if (id.length <= 3) {
        return id
    } else {
        return id.substr(3, id.length)
    }
}

export const getPostGlobalId = (id) => {
    return POST_GLOBAL_ID + id
}

export const getPost = (postId, next) => {
    StorePost.findById(getPostLocalId(postId), function (err, post) {
        if (err) next(null)
        else next(post)
    })
}

export const updatePost = (postId, list, userID, next) => {
    getPostLocalId(postId, (post) => {
        if (post) {
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

export const addPostService = (storeId, list, type, next) => {
    var list = req.body.list
    var detailList = []
    for (var raw in list) {
        const storePostDetail = new StorePostDetail(raw)
        detailList.push(storePostDetail)
    }
    createNewPost(storeId, (new Date()).getTime(), list, type, function (post) {
        next(post)
    })
}

export const getPostList = (storeId, time, length, type, next) => {
    var q = StorePost.find({storeId: storeId, createdAt: {$lt: time}, type: type}).sort({createdAt: -1}).limit(length)
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
    storePost.save(() => {
        next(storePost)
    })
}