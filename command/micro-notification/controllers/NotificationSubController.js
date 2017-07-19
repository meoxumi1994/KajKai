import { getListFollower, addNewFollow, removeFollow } from '../services/FollowService'

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