import { UserFollow } from '../models'
import { addUserFollowPub, removeUserFollowPub } from '../controllers/NotificationPubController'

export const updateUserFollow = (followerId, followeeId, next) => {
    UserFollow.findOne({followerId, followeeId}, (err, follow) => {
        if (follow) {
            UserFollow.remove({followerId, followeeId}, (err, follow) => {
                addUserFollowPub(follow);
                next({...follow, type: 'remove'});
            });
        } else {
            const newFollow = new UserFollow({followerId, followeeId});
            newFollow.save(() => {
                removeUserFollowPub(newFollow);
                next({...newFollow, type: 'add'});
            });
        }
    })
};