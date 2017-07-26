import { getListFollower, addNewFollow, removeFollow, modifyFollow, getListFollowee } from '../services/FollowService'
import { addNewLike } from '../services/LikeService'
import { getInterestWithIn } from '../services/InterestService'

export const getListFollowerCon = (message, next) => {
    getListFollower(message.followeeId, (list) => {
        next({status: 'success', followerList: list});
    })
};

export const getListFolloweeCon = (message, next) => {
    getListFollowee(message.followerId, (list) => {
        next({status: 'success', followeeList: list})
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

export const updateFollowCon = (message, next) => {
    let followerId = message.userId;
    let followeeId = (message.storeId) ? message.storeId : message.sellPostId;
    modifyFollow(followerId, followeeId, (follow) => {
        if (follow) {
            next({status: 'success', follow: follow})
        } else {
            next({status: 'failed'})
        }
    })
};

export const addLikeCon = (message, next) => {
    addNewLike(message.likerId, message.sellPostId, message.fCommentId, message.sCommentId, (like) => {
        if (like) {
            next({status: 'success', like: like});
        } else {
            next({status: 'failed'})
        }
    })
};

export const getListInterestWithSub = (message, next) => {
    getInterestWithIn(message.longitude, message.latitude, message.categoryId, message.range, (listId) => {
        next({status: 'success', listId: listId});
    })
};