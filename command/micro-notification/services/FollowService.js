import { Follow } from '../models'
import { addFollowPub, removeFollowPub } from '../controllers/NotificationPubController'

export const addNewFollow = (followerId, followeeId, next) => {
    Follow.findOne({followerId, followeeId}, (err, follow) => {
        if (follow) {
            next(null);
        } else {
            const newFollow = new Follow({followerId, followeeId});
            newFollow.save(() => {
                next(newFollow);
            });
        }
    })
};

export const removeFollow = (followerId, followeeId, next) => {
    Follow.remove({followerId, followeeId}, () => {
        next();
    })
};

export const modifyFollow = (followerId, followeeId, next) => {
    Follow.findOne({followerId, followeeId}, (err, follow) => {
        if (follow) {
            removeFollowPub(follow);
            removeFollow(followerId, followeeId, () => {
                next({...follow, type: 'remove'})
            })
        } else {
            const newFollow = new Follow({followerId, followeeId});
            addFollowPub(newFollow);
            newFollow.save(() => {
                next({...newFollow, type: 'add'});
            });
        }
    })
};

export const getListFollower = (followeeId, next) => {
    Follow.find({followeeId}, (err, listId) => {
        next(listId);
    })
};

export const getListFollowee = (followerId, next) => {
    Follow.find({followerId}, (err, listId) => {
        next(listId)
    })
};