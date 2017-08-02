import { Follow } from '../models'
import { addFollowPub, removeFollowPub } from '../controllers/NotificationPubController'

export const addNewFollow = (followerId, followeeId, next) => {
    Follow.findOne({followerId, followeeId}, (err, follow) => {
        if (follow) {
            next(null);
        } else {
            const newFollow = new Follow({followerId, followeeId});
            addFollowPub(newFollow);
            newFollow.save(() => {
                next(newFollow);
            });
        }
    })
};

export const removeFollow = (followerId, followeeId, next) => {
    Follow.remove({followerId, followeeId}, () => {
        removeFollowPub({followerId, followeeId});
        next();
    })
};

export const modifyFollow = (followerId, followeeId, next) => {
    Follow.findOne({followerId, followeeId}, (err, follow) => {
        if (follow) {
            Follow.remove({followerId, followeeId}, (err) => {
                removeFollowPub(follow);
                next({...follow, type: 'remove'})
            })
        } else {
            const newFollow = new Follow({followerId, followeeId});
            newFollow.save((err) => {
                addFollowPub(newFollow);
                next({...newFollow, type: 'add'});
            });
        }
    })
};

export const getListFollower = (followeeId, next) => {
    Follow.find({followeeId}, (err, listId) => {
        let res = [];
        for (let i = 0; i < listId.length; ++i) {
            res.push(listId[i].followerId)
        }
        next(res);
    })
};

export const getListFollowee = (followerId, next) => {
    Follow.find({followerId}, (err, listId) => {
        let res = [];
        for (let i = 0; i < listId.length; ++i) {
            res.push(listId[i].followeeId)
        }
        next(res)
    })
};