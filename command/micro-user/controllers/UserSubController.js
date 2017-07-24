import { getUserFromToken, getUserBasicStoreInfo, getUser, getListUser, getListUserBasicInfo, addBan, removeBan } from '../services/UserService'

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

export const addBanCon = (message, next) => {
    addBan(message.ban.userId, message.ban.reason, () => {
        next(null);
    });
};

export const removeBanCon = (message, next) => {
    removeBan(message.ban.userId, message.ban.reason, () => {
        next(null);
    });
};