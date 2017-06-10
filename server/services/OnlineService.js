import { redisClient } from '../datasource'
const ONLINE_LIST_ID = 'online_list_id'

export const getStatusOnline = (id, next) => {
    redisClient.hget(ONLINE_LIST_ID, id, function (err, getVal) {
        if (err) next(null)
        else {
            next(true)
        }
    })
}

export const addUserOnline = (id, next) => {
    redisClient.hset(ONLINE_LIST_ID, id, 1, function (err, getVal) {
        if (err) next(null)
        else {
            if (getVal === 1)
                next(true)
            else next(null)
        }
    })
}

export const removeUserOnline = (id, next) => {
    redisClient.hdel(ONLINE_LIST_ID, id, 1, function (err, getVal) {
        if (err) next(null)
        else {
            if (getVal === 1) {
                next(true)
            } else next(null)
        }
    })
}