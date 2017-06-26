import { getUserFromToken, getUserBasicStoreInfo, getUser, getListUser, getListUserBasicInfo } from '../services/UserService'

export const authorizeTokenSub = (message, next) => {
    getUserFromToken(message.token, function (user) {
        if (user) {
            next({status: 'success', user: getUserBasicStoreInfo(user)})
        } else {
            next({status: 'failed'})
        }
    })
}

export const getUserSub = (message, next) => {
    getUser(message.userId, function (user) {
        if (user) {
            next({status: 'success', user: getUserBasicStoreInfo(user)})
        } else {
            next({status: 'failed'})
        }
    })
};

export const getListUserSub = (message, next) => {
    getListUser(message.userIdList, (users) => {
        if (users) {
            next({status: 'success', users: getListUserBasicInfo(users)})
        } else {
            next({status: 'failed'})
        }
    })
};