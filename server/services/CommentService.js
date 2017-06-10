import { FirstLayerComment, SecondLayerComment } from '../models'
import { getCurrentTime } from '../utils/Utils'
import UserService from './UserService'
import { getOrder } from './OrderService'
import { getStore } from './StoreService'
import { getPost } from './StorePostService'
import { addNewEmitSocketDetail } from './SocketService'
import { createNewEmit } from './EmitDetailService'

export const getTimelyFirstComment = (postId, time, length, next) => {
    var query = FirstLayerComment.find({postId: postId, time: {$lt: time}}).sort({time: -1}).limit(length)
    // var query = FirstLayerComment.aggregate([ {$match:{postId: postId, time: {$lt: time}}} ,{$project:{id: '$_id', _id: 0}}])
    // const query = FirstLayerComment.aggregate([ {$match:{$and:[{time: {$lt:time}}, {postId: postId}]}}, { $limit : length },
    //     {$project: {id: '$_id', _id: 0,
    //     posterId: 1,
    //     posterAvatar: 1, posterName: 1,
    //     order: 1,
    //     time: 1,
    //     postId: 1,
    //     content: 1}}])
    query.exec(function (err, data){
        if (err) next(null)
        else {
            data.sort(function (a, b) {
                return a.time - b.time
            })
            next(data)
        }
    })
}

export const getFirstLayerComment = (id, next) => {
    FirstLayerComment.findById(id, function (err, data) {
        if (err) next(null)
        else next(data)
    })
}

export const getSecondLayerCommentById = (id, next) => {
    SecondLayerComment.findById(id, function (err, data) {
        if (err) next(null)
        else next(data)
    })
}

export const saveNewFirstLayerComment = (posterId, posterAvatar, posterName, order, time, postId, content, next) => {
    var comment = new FirstLayerComment({posterId: posterId, posterName: posterName, posterAvatar: posterAvatar,
                            order: order, time: time, postId: postId, content: content})

    createNewEmit({type: 'FistLayerComment', lastTime: getCurrentTime()}, function (emitDetail) {
        comment.emitId = emitDetail._id
        comment.save(function (err) {
            addNewEmitSocketDetail(comment.emitId, posterId, function (emitSocketDetail) {
                getPost(comment.postId, function (storePost) {
                    storePost.commentCounter++
                    addNewEmitSocketDetail(storePost.emitId, posterId, function (emitSocket) {
                        storePost.save(function (err) {
                            if (err) next(null)
                            else next(comment)
                        })
                    })
                })
            })

        })
    })
}

export const addNewComment = (postId, data, userId, storeId, next) => {
    var order = null
    if (data.products.length > 0) order = getOrder(data.products)

    getStore(storeId, function (store) {
        if (!store) {
            UserService.getUser(userId, function (user) {
                if (!user) {
                    next(null)
                } else {
                    saveNewFirstLayerComment(user._id, user.avatarUrl, user.name, order, data.time, postId, data.content, function (comment) {
                        next(comment)
                    })
                }
            })
        } else {
            if (userId === store.owner) {
                saveNewFirstLayerComment(store._id, store.avatarUrl, store.storename, order, data.time, postId, data.content, function (comment) {
                    next(comment)
                })
            } else {
                UserService.getUser(userId, function (user) {
                    if (!user) {
                        next(null)

                    } else {
                        saveNewFirstLayerComment(user._id, user.avatarUrl, user.name, order, data.time, postId, data.content, function (comment) {
                            next(comment)
                        })
                    }
                })
            }
        }
    })
}

export const getSecondLayerComment = (postId, time, length, next) => {
    var query = SecondLayerComment.find({postId: postId, time: {$lt: time}}).sort({time: -1}).limit(length)
    query.exec(function (err, data){
        if (err) next(null)
        else {
            data.sort(function (a, b) {
                return a.time - b.time
            })
            next(data)
        }
    })
}

export const saveNewSecondLayerComment = (posterId, posterAvatar, posterName, time, postId, content) => {
    var comment = new SecondLayerComment({posterId: posterId, posterAvatar: posterAvatar, posterName: posterName,
                                    time: time, postId: postId, content: content})
    getFirstLayerComment(postId, function (firstComment) {
        addNewEmitSocketDetail(firstComment.emitId, posterId, function () {
            firstComment.commentCounter++
            firstComment.save(function () {
                createNewEmit({type: 'SecondLayerComment', lastTime: getCurrentTime()}, function (emitDetail) {
                    comment.emitId = emitDetail._id
                    addNewEmitSocketDetail(emitDetail._id, posterId, function () {
                        comment.save(function () {
                            next(comment)
                        })
                    })
                })
            })
        })
    })
}

export const addNewSecondLayerComment = (postId, data, userId, storeId, next) => {
    getStore(storeId, function (store) {
        if (!store) {
            UserService.getUser(userId, function (user) {
                if (!user) {
                    next(null)
                } else {
                    saveNewSecondLayerComment(user._id, user.avatarUrl, user.name, data.time, postId, content, function (comment) {
                        next(comment)
                    })
                }
            })
        } else {
            if (store.owner === userId) {
                saveNewSecondLayerComment(store._id, store.avatarUrl, store.storename, data.time, postId, content, function (comment) {
                    next(comment)
                })
            } else {
                UserService.getUser(userId, function (user) {
                    if (!user) {
                        next(null)
                    } else {
                        saveNewSecondLayerComment(user._id, user.avatarUrl, user.name, data.time, postId, content, function (comment) {
                            next(comment)
                        })
                    }
                })
            }
        }
    })
}