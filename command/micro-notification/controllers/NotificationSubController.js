import { getListFollower, addNewFollow, removeFollow, modifyFollow, getListFollowee } from '../services/FollowService'
import { addNewLike } from '../services/LikeService'
import { publishNewInterest } from '../services/InterestService'
import { updateUserFollow } from '../services/UserFollowService'

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

        console.log('this shit ' + follow);
        if (follow) {
            next({status: 'success', follow: follow})
        } else {
            next({status: 'failed'})
        }
    })
};

export const updateUserFollowCon = (message, next) => {
    let followerId = message.userId;
    let followeeId = (message.storeId) ? message.storeId : message.sellPostId;
    updateUserFollow(followerId, followeeId, (userFollow) => {
        if (userFollow) {
            next({status: 'success', userFollow: userFollow})
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

export const notifyInterestSub = (message, next) => {
    publishNewInterest(message.store);
};

export const createSellPostSub = (message) => {
    console.log(message, JSON.stringify(message));
    const sellpost = message.sellpost;
    const sellPostId = sellpost.sellPostId;
    const userId = sellpost.owner;
    modifyFollow(userId, sellPostId, () => {
        console.log('sellpost owner follow ' + userId, sellPostId);
    })
};