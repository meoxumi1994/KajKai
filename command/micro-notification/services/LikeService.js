import { Like } from '../models'
import { addlikePub, removeLikePub, getSellPostId } from '../controllers/NotificationPubController'

export const addNewLike = (likerId, sellPostId, fCommentId, sCommentId, next) => {
    let likenId = sCommentId;
    if (!likenId) likenId = fCommentId;
    if (!likenId) likenId = sellPostId;

    Like.findOne({likerId, likenId}, (err, like) => {
        if (!like) {
            const newLike = new Like({likerId, likenId});
            newLike.save(() => {
                addlikePub(getLikePubInfo(newLike));
                if (sellPostId)
                    next({likerId, sellPostId, fCommentId, sCommentId, type: 'like'});
                else {
                    getSellPostId(fCommentId, (gotSellPostId) => {
                        next({likerId, sellPostId: gotSellPostId, fCommentId, sCommentId, type: 'like'});
                    })
                }
            })
        } else {
            Like.remove({likerId, likenId}, () => {
                removeLikePub(getLikePubInfo({likerId, likenId}));
                if (sellPostId)
                    next({likerId, sellPostId, fCommentId, sCommentId, type: 'unlike'});
                else {
                    getSellPostId(fCommentId, (gotSellPostId) => {
                        next({likerId, sellPostId: gotSellPostId, fCommentId, sCommentId, type: 'unlike'});
                    })
                }
            });
        }
    });
};

// export const removeLike = (likerId, likenId, next) => {
//     Like.findOne({likerId, likenId}, (err, oldLike) => {
//         if (oldLike) {
//             Like.remove({likerId, likenId}, () => {
//                 removeLikePub(getLikePubInfo({likerId, likenId}));
//                 next(oldLike);
//             });
//         } else {
//             next(null);
//         }
//     });
// };

export const getLikePubInfo = (like) => {
    return {
        likerId: like.likerId,
        likenId: like.likenId
    }
};