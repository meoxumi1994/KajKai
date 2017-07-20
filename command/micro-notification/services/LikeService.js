import { Like } from '../models'
import { addlikePub, removeLikePub } from '../controllers/NotificationPubController'

export const addNewLike = (likerId, likenId, next) => {
    Like.findOne({likerId, likenId}, (err, like) => {
        if (!like) {
            const newLike = new Like({likerId, likenId});
            newLike.save(() => {
                addlikePub(getLikePubInfo(newLike));
                next(newLike);
            })
        } else {
            next(null);
        }
    });
};

export const removeLike = (likerId, likenId, next) => {
    Like.findOne({likerId, likenId}, (err, oldLike) => {
        if (oldLike) {
            Like.remove({likerId, likenId}, () => {
                removeLikePub(getLikePubInfo({likerId, likenId}));
                next(oldLike);
            });
        } else {
            next(null);
        }
    });
};

export const getLikePubInfo = (like) => {
    return {
        likerId: like.likerId,
        likenId: like.likenId
    }
};