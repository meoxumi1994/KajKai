import { Follow } from '../models'

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

export const getListFollower = (followeeId, next) => {
    Follow.find({followeeId}, (err, listId) => {
        next(listId);
    })
};
