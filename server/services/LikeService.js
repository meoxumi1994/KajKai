import {StorePost, FirstLayerComment, SecondLayerComment} from  '../models'
import { getPost } from '../services/StorePostService'
import { redisClient } from '../datasource'
import { Like } from '../models'

const LIKE_DATABASE = 'likeDatabase'

export const getRedisId = (userId, likenId, likenType) => {
    return userId + '$' + likenType + '~' + likenType;
}
export const actLikes = (userId, likenId, likenType, next) => {
    const redisId = getRedisId(userId, likenId, likenType)
    redisClient.hexists(LIKE_DATABASE, redisId, function (err, reply) {
        if (reply === 0) {
            addLikeRedis(redisId, function (reply) {
                if (!reply) next(null)
                else {
                    addLike(userId, likenId, likenType, function (res) {
                        if (!res) next(null)
                        else next(res)
                    })
                }
            })
        } else {
            removeLikeRedis(redisId, function (reply) {
                if (!reply) next(null)
                else {
                    removeLikeRedis(userId, likenId, likenType, function (res) {
                        if (!res) next(null)
                        else next(res)
                    })
                }
            })
        }
    })
}

export const addLike = (userId, likenId, likenType, next) => {
    switch (likenType) {
        case 1: // post
            getPost(likenId, function (post) {
                if (!post) {
                    next(null)
                } else {
                    post.likeCounter++;
                    post.save(function (err) {
                        if (err) next(null)
                        else next('success')
                    })
                }
            })
            break
        case 2: // comment

            break
    }
}

export const removeLike = (userId, likenId, likenType, next) => {
    switch (likenType) {
        case 1:
            getPost(likenId, function (post) {
                if (!post) {
                    next(null)
                } else {
                    post.likeCounter++;
                    post.save(function (err) {
                        if (err) next(null)

                    })
                }
            })
    }
}



export const addLikeDB  = (userId, likenId, likenType, next) => {
    var like = new Like({userId: userId, likenId: likenId, likenType: likenType})
    like.save(function (err) {
        if (err) next(null)
        else next(like)
    })

}

export const removeLikeDB = (redisId) => {
    var like = new Like({userId: userId, likenId: likenId, likenType: likenType})
    like.save(function (err) {
        if (err) next(null)
        else next(like)
    })
}
