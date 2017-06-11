import { getPost } from '../services/StorePostService'
import { getFirstLayerComment, getSecondLayerComment } from '../services/CommentService'
import { getUser } from '../services/UserService'
import { Like } from '../models'
import { getCurrentTime } from  '../utils/Utils'

export const getObj = (id, next) => {
    getPost(id, function (post) {
        if (post) next(post)
        else {
            getFirstLayerComment(id, function (firComment) {
                if (firComment) next(firComment)
                else {
                    getSecondLayerComment(id, function (secComment) {
                        if (secComment) next(secComment)
                        else next(null)
                    })
                }
            })
        }
    })
}

export const updateLikeCounter = (obj, added, next) => {
    obj.likeCounter += added
    obj.save(function () {
        next()
    })
}

export const modifyLike = (userId, likenId, time, next) => {
    getObj(likenId, function (obj) {
        if (!obj) next(null)
        else {
            getUser(userId, function (user) {
                if (!user) next(null)
                Like.findOne({userId: userId, likenId: likenId}, function (like) {
                    if (like) {
                        Like.findOneAndRemove({userId: userId, likenId: likenId}, function () {
                            updateLikeCounter(obj, -1, function () {
                                next({user: user, type: 'unlike'})
                            })
                        })
                    } else {
                        const newLike = new Like({userId: userId, likenId: likenId, time: time})
                        newLike.save(function () {
                            updateLikeCounter(obj, 1, function () {
                                next({user: user, type: 'like'})
                            })
                        })
                    }
                })
            })
        }
    })
}

export const getLikeUserIdList = (objId, length, next) => {
    const query = Like.find({likenId: objId}).sort({time: -1}).limit(length)
    query.exec(function (list) {
        if (!list) next([])
        else {
            var arr = []
            for (var i = 0, sz = list.length; i < sz; ++i)
                arr.push(arr[i].userId)
            next(arr)
        }
    })
}

export const getLikeObjIdList = (userId, time, length, next) => {
    const query = Like.find({userId: userId, time: {$lt: time}}).sort({time: -1}).limit(length)
    query.exec(function (list) {

    })
}


