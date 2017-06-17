import {Like} from '../../micro-store/models/index'
import { getCurrentTime } from '../../micro-store/utils/utils'

export const checkLike = (userId, likenId, next) => {
    Like.findOne({userId: userId, likenId: likenId}, function (like) {
        if (like) {
            removeLike(userId, likenId, next)
        } else {
            addLike(userId, likenId, next)
        }
    })
}

export const addLike = (userId, likenId, next) => {
    const time = getCurrentTime();
    const like = new Like({userId: userId, likenId: likenId, time: time})
    like.save( () => {
        next()
    })
}

export const removeLike = (userId, likenId, next) => {
    Like.remove({userId: userId, likenId: likenId}, () => {
        next()
    })
}

export const getLikeList = (likenId, length, next) => {
    if (!length) length = 5
    var query = Like.find({likenId: likenId}).limit(length)

}