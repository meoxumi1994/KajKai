import { FirstLayerComment } from '../models'
import mongoose from '../datasource'
import UserService from './UserService'
import {getOrder} from './OrderService'
import {getStore} from './StoreService'

export const getTimelyFirstComment = (postId, time, length, next) => {
    FirstLayerComment.find({postId: postId, time: {$lt: time}}, {limit: length}, function (err, data){
        if (err) next(null)
        else next(data)
    })
}

export const addNewComment = (postId, data, userId, next) => {
    var order = null
    if (data.products) order = getOrder(data.products)

    UserService.getUser(userId, function (user) {
        if (!user) {
            next(null)
            // getStore()
            // TODO get store
        } else {
            var comment = new FirstLayerComment({posterId: user._id, posterAvatar: user.avatarUrl, posterName: user.username,
                        order: order, time: data.time, postId: postId})
            comment.save(function (err) {
                if (err) next(null)
                else next(comment)
            })
        }
    })
}