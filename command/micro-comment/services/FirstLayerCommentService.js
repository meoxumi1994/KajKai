import { FirstLayerComment, SecondLayerComment } from '../models'
import { getOrder, getOrderInfo } from './OrderService'
import globalId from '../config/globalId'
import { getUser, getStore, getStoreFromPostId } from '../controllers/CommentPubController'
import { newFirstLayerCommentCreated } from '../controllers/CommentPubController'

const FIRST_COMMENT_GLOBAL_ID = globalId.FIRST_COMMENT_GLOBAL_ID;
const USER_GLOBAL_ID = globalId.USER_GLOBAL_ID;
const SELL_POST_GLOBAL_ID = globalId.SELLPOST_GLOBAL_ID;

export const getFirstCommentGlobalId = (id) => {
    return FIRST_COMMENT_GLOBAL_ID + id
};

export const getFirstCommentLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3)
};

export const getFirstLayerCommentInfo = (fComment, next) => {
    if (fComment.posterId.startsWith(USER_GLOBAL_ID)) {
        getUser(fComment.posterId, (user) => {
            if (!user) next(null);
            else {
                let info = {
                    content: fComment.content,
                    name: user.userName,
                    avatarUrl: user.avatarUrl,
                    commenterid: user.id,
                    time: fComment.time,
                    order: getOrderInfo(fComment.order),
                    id: getFirstCommentGlobalId(fComment._id),
                    like: fComment.likeCounter
                };
                if (fComment.postId.startsWith(globalId.SELLPOST_GLOBAL_ID)) {
                    info = {...info, sellpostid: fComment.postId}
                } else {
                    info = {...info, minorpostid: fComment.postId};
                }
                next(info);
            }
        })
    } else {
        getStore(fComment.posterId, (store) => {
            if (!store) next(null);
            else {
                let info = {
                    content: fComment.content,
                    name: store.storeName,
                    avatarUrl: store.avatarUrl,
                    commenterid: store.storeId,
                    time: fComment.time,
                    order: getOrderInfo(fComment.order),
                    id: getFirstCommentGlobalId(fComment._id),
                    like: fComment.likeCounter,
                    urlname: store.urlName,
                    user: store.owner
                };
                if (fComment.postId.startsWith(globalId.SELLPOST_GLOBAL_ID)) {
                    info = {...info, sellpostid: fComment.postId}
                } else {
                    info = {...info, minorpostid: fComment.postId};
                }
                next(info);
            }
        })
    }
};

export const getFirstLayerCommentPubInfo = (fComment) => {
    let data = {
        posterId: fComment.posterId, order: getOrderInfo(fComment.order), time: fComment.time,
        content: fComment.content, fCommentId: getFirstCommentGlobalId(fComment._id),
    };
    if (fComment.postId.startsWith(SELL_POST_GLOBAL_ID)) {
        data = {...data, sellPostId: fComment.postId};
    } else {
        data = {...data, minorPostId: fComment.postId};
    }
    return data;
};

export const saveNewFirstLayerComment = (posterId, order, time, postId, content, next) => {
    let comment = new FirstLayerComment({ posterId: posterId, order: order, time: time,
        postId: postId, content: content });
    console.log('fuck ' + JSON.stringify(comment));
    comment.save((err) => {
        newFirstLayerCommentCreated(getFirstLayerCommentPubInfo(comment));
        next(comment);
    })
};

export const addNewFirstLayerComment = (data, next) => {
    let order = null;
    if (data.order && data.order.length > 0) order = getOrder(data.order);

    getStoreFromPostId(data.sellpostid, (store) => {
        console.log('store ' + JSON.stringify(store));
        if (data.userID.toString() === store.owner.toString()) {
            saveNewFirstLayerComment(store.storeId, order, data.time, data.sellpostid, data.content, (comment) => {
                next(comment)
            })
        } else {
            saveNewFirstLayerComment(data.userID, order, data.time, data.sellpostid, data.content, (comment) => {
                next(comment);
            })
        }
    });
};

export const getFComment = (id, next) => {
    FirstLayerComment.findById(getFirstCommentLocalId(id), (err, fComment) => {
        next(fComment);
    })
};