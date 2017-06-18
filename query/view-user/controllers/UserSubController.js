import { getUserFromToken, getUserBasicStoreInfo } from '../services/UserService'

export const authorizeToken = (message, next) => {
    getUserFromToken(message.token, function (user) {
        if (user) {
            next({status: 'success', user: getUserBasicStoreInfo(user)})
        } else {
            next({status: 'failed'})
        }
    })
}

export const getUser = (message, next) => {
    getUserBasicStoreInfo(message.userId, function (user) {
        if (user) {
            next({status: 'success', user: getUserBasicStoreInfo(user)})
        } else {
            next({status: 'failed'})
        }
    })
}