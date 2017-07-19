import { getListFollower, addNewFollow, removeFollow } from '../services/FollowService'
import { addNewLike, removeLike } from '../services/LikeService'

export const getListFollowerCon = (message, next) => {
    getListFollower(message.followeeId, (list) => {
        next({status: 'success', followerList: list});
    })
};

export const addNewFollowCon = (message, next) => {
    addNewFollow(message.followerId, message.followeeId, () => {
        //
    });
};

export const removeFollowCon = (message, next) => {
    removeFollow(message.followerId, message.followeeId, () => {
        //
    })
};

export const addLikeCon = (message, next) => {
    addNewLike(message.likerId, message.likenId, (like) => {
        if (like) {
            next({status: 'success', like: like});
        } else {
            next({status: 'failed'})
        }
    })
};

export const removeLikeCon = (message, next) => {
    removeLike(message.likerId, message.likenId, (like) => {
        if (like) {
            next({status: 'success', like: like})
        } else {
            next({status: 'failed'})
        }
    })
};