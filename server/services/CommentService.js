import { FirstLayerComment, SecondLayerComment } from '../models'
import mongoose from '../datasource'
import UserService from './UserService'
import {getOrder} from './OrderService'
import {getStore} from './StoreService'

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

export const addNewComment = (postId, data, userId, storeId, next) => {
    var order = null
    if (data.products.length > 0) order = getOrder(data.products)

    getStore(storeId, function (store) {
        if (!store) {
            UserService.getUser(userId, function (user) {
                if (!user) {
                    next(null)

                } else {
                    var comment = new FirstLayerComment({posterId: user._id, posterAvatar: user.avatarUrl, posterName: user.name,
                        order: order, time: data.time, postId: postId, content: data.content})
                    console.log(comment)
                    comment.save(function (err) {
                        if (err) next(null)
                        else next(comment)
                    })
                }
            })
        } else {
            if (userId === store.owner) {
                var comment = new FirstLayerComment({
                    posterId: store._id, posterAvatar: store.avatarUrl, posterName: store.storename,
                    order: order, time: data.time, postId: postId, content: data.content
                })
                comment.save(function (err) {
                    if (err) next(null)
                    else next(comment)
                })
            } else {
                UserService.getUser(userId, function (user) {
                    if (!user) {
                        next(null)

                    } else {
                        var comment = new FirstLayerComment({posterId: user._id, posterAvatar: user.avatarUrl, posterName: user.name,
                            order: order, time: data.time, postId: postId, content: data.content})
                        console.log(comment)
                        comment.save(function (err) {
                            if (err) next(null)
                            else next(comment)
                        })
                    }
                })
            }
        }
    })


}

export const getSecondLayerComment = (postId, time, length, next) => {
    // var query = SecondLayerComment.find({postId: postId, time: {$lt: time}}).limit(length)
    // // const query = FirstLayerComment.aggregate([ {$match:{$and:[{time: {$lt:time}}, {postId: postId}]}}, { $limit : length },
    // //     {$project: {id: '$_id', _id: 0,
    // //         posterId: 1,
    // //         posterAvatar: 1, posterName: 1,
    // //         time: 1,
    // //         postId: 1,
    // //         content: 1}}])
    // query.exec(function (err, data){
    //     if (err) next(null)
    //     else next(data)
    // })
    FirstLayerComment.findById(postId, function (err, firstComment) {
        if (err) next(null);
        else {
            next(firstComment.childComment)
        }
    })
}

export const addNewSecondLayerComment = (postId, data, userId, storeId, next) => {
    getStore(storeId, function (store) {
        if (!store) {
            UserService.getUser(userId, function (user) {
                if (!user) {
                    next(null)
                } else {
                    var comment = new SecondLayerComment({posterId: user._id, posterAvatar: user.avatarUrl, posterName: user.name,
                        time: data.time, postId: postId, content: data.content})
                    console.log(comment)
                    FirstLayerComment.findById(postId, function (err, firstComment) {
                        if (err) next(null)
                        else {
                            firstComment.childComment.push(comment)
                            firstComment.save(function (err) {
                                if (err) next(null)
                                else next(comment)
                            })
                        }
                    })
                }
            })
        } else {
            if (store.owner === userId) {
                var comment = new FirstLayerComment({
                    posterId: store._id, posterAvatar: store.avatarUrl, posterName: store.storename,
                    time: data.time, postId: postId, content: data.content
                })
                FirstLayerComment.findById(postId, function (err, firstComment) {
                    if (err) next(null)
                    else {
                        firstComment.childComment.push(comment)
                        firstComment.save(function (err) {
                            if (err) next(null)
                            else next(comment)
                        })
                    }
                })
            } else {
                UserService.getUser(userId, function (user) {
                    if (!user) {
                        next(null)
                    } else {
                        var comment = new SecondLayerComment({
                            posterId: user._id, posterAvatar: user.avatarUrl, posterName: user.name,
                            time: data.time, postId: postId, content: data.content
                        })
                        console.log(comment)
                        FirstLayerComment.findById(postId, function (err, firstComment) {
                            if (err) next(null)
                            else {
                                firstComment.childComment.push(comment)
                                firstComment.save(function (err) {
                                    if (err) next(null)
                                    else next(comment)
                                })
                            }
                        })
                    }
                })
            }
        }
    })

}


// var comment = new SecondLayerComment({content: 'fuck', time:  (new Date()).getTime(), postId:'59303ae9c2b270956486f2aa' })
//
// FirstLayerComment.findById('59303ae9c2b270956486f2aa', function (err, firstComment) {
//     if (err) console.log(err)
//     else {
//         firstComment.childComment.push(comment)
//         firstComment.save(function (err) {
//             if (err) console.log(err)
//             else console.log(firstComment)
//         })
//     }
// })

// getTimelyFirstComment('5929b0a92d53f82b01c48419', (new Date()).getTime(), 10, function (da) {
//     console.log(da)
// })