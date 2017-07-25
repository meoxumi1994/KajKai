import { Like } from '../models'
import { addlikePub, removeLikePub, getSellPostId, getStoreFromPostId } from '../controllers/NotificationPubController'

export const addNewLike = (likerId, sellPostId, fCommentId, sCommentId, next) => {
    if (sellPostId) {
        likeSellPost(likerId, sellPostId, (like) => {
            next(like);
        })
    } else {
        likeComment(likerId, fCommentId, sCommentId, (like) => {
            next(like);
        })
    }
};

export const likeSellPost = (likerId, sellPostId, next) => {
    getStoreFromPostId(sellPostId, (store) => {
        let name = null;
        let avatarUrl = null;
        if (likerId === store.owner) {
            likerId = store.storeId;
            name = store.storeName;
            avatarUrl = store.avatarUrl;
        }

        let likenId = sellPostId;

        Like.findOne({likerId, likenId}, (err, like) => {
            if (!like) {
                const newLike = new Like({likerId, likenId});
                newLike.save(() => {
                    addlikePub(getLikePubInfo(newLike));
                    next({likerId, sellPostId, type: 'like', name, avatarUrl});
                })
            } else {
                Like.remove({likerId, likenId}, () => {
                    removeLikePub(getLikePubInfo({likerId, likenId}));
                    next({likerId, sellPostId, type: 'unlike', name, avatarUrl});
                });
            }
        });
    });
};

export const likeComment = (likerId, fCommentId, sCommentId, next) => {
    getSellPostId(fCommentId, (gotSellPostId) => {
        getStoreFromPostId(gotSellPostId, (store) => {
            let name = null;
            let avatarUrl = null;
            if (likerId === store.owner) {
                likerId = store.storeId;
                name = store.storeName;
                avatarUrl = store.avatarUrl;
            }

            let likenId = sCommentId;
            if (!likenId) likenId = fCommentId;

            Like.findOne({likerId, likenId}, (err, like) => {
                if (!like) {
                    const newLike = new Like({likerId, likenId});
                    newLike.save(() => {
                        addlikePub(getLikePubInfo(newLike));
                        next({likerId, sellPostId: gotSellPostId, fCommentId, sCommentId, type: 'like', name, avatarUrl});
                    })
                } else {
                    Like.remove({likerId, likenId}, () => {
                        removeLikePub(getLikePubInfo({likerId, likenId}));
                        next({likerId, sellPostId: gotSellPostId, fCommentId, sCommentId, type: 'unlike', name, avatarUrl});
                    });
                }
            });
        });
    });
};

export const getLikePubInfo = (like) => {
    return {
        likerId: like.likerId,
        likenId: like.likenId
    }
};