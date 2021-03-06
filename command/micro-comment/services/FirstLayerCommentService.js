import { FirstLayerComment, Match } from '../models'
import { getOrder, getOrderInfo } from './OrderService'
import globalId from '../config/globalId'
import { getUser, getStoreFromPostId, checkBlacList } from '../controllers/CommentPubController'
import { newFirstLayerCommentCreated, firstLayerCommentUpdated } from '../controllers/CommentPubController'

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
    getStoreFromPostId(fComment.postId, (store) => {
        if (fComment.posterId.startsWith(USER_GLOBAL_ID)) {
            getUser(fComment.posterId, (user) => {
                if (!user) next(null);
                else {
                    let info = {
                        content: fComment.content,
                        name: user.username,
                        avatarUrl: user.avatarUrl,
                        commenterid: user.id,
                        time: fComment.time,
                        order: getOrderInfo(fComment.order),
                        id: getFirstCommentGlobalId(fComment._id),
                        like: fComment.likeCounter,
                        status: fComment.status,
                        type: 'user',
                        storeid: store.storeId,
                        match: fComment.match,
                        address: user.address,
                        position: {
                            lng: user.longitude,
                            lat: user.latitude,
                        },
                        phone: user.phone
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
                user: store.owner,
                status: fComment.status,
                type: 'store',
                storeid: store.storeId,
                match: fComment.match
            };
            if (fComment.postId.startsWith(globalId.SELLPOST_GLOBAL_ID)) {
                info = {...info, sellpostid: fComment.postId}
            } else {
                info = {...info, minorpostid: fComment.postId};
            }
            next(info);
        }
    });
};

export const getFirstLayerCommentPubInfo = (fComment) => {
    let data = {
        posterId: fComment.posterId, order: getOrderInfo(fComment.order), time: fComment.time,
        content: fComment.content, fCommentId: getFirstCommentGlobalId(fComment._id),
        match: fComment.match
    };
    if (fComment.postId.startsWith(SELL_POST_GLOBAL_ID)) {
        data = {...data, sellPostId: fComment.postId};
    } else {
        data = {...data, minorPostId: fComment.postId};
    }
    return data;
};

export const saveNewFirstLayerComment = (posterId, order, time, postId, content, match, next) => {
    if (order) {
        order = getOrder(order);
    }
    let listTag = [];
    if (match) {
        for (let i = 0; i < match.length; ++i) {
            listTag.push(new Match(match[i]));
        }
    }
    let comment = new FirstLayerComment({ posterId: posterId, order: order, time: time,
        postId: postId, content: content, status: 'new' , match: listTag });
    console.log('fuck ' + JSON.stringify(comment));
    comment.save((err) => {
        newFirstLayerCommentCreated(getFirstLayerCommentPubInfo(comment));
        next(comment);
    })
};

export const addNewFirstLayerComment = (data, next) => {
    getStoreFromPostId(data.sellpostid, (store) => {
        console.log('store ' + JSON.stringify(store));
        if (!store) return;
        checkBlacList(store.owner, data.userID, (check) => {
            if (!check) {
                if (data.userID === store.owner) {
                    saveNewFirstLayerComment(store.storeId, data.order, data.time, data.sellpostid, data.content, data.match, (comment) => {
                        next(comment)
                    })
                } else {
                    saveNewFirstLayerComment(data.userID, data.order, data.time, data.sellpostid, data.content, data.match, (comment) => {
                        next(comment);
                    })
                }
            } else {
                next(null);
            }
        });
    });
};

export const getFComment = (id, next) => {
    console.log('id ' + id + ' ' + getFirstCommentLocalId(id));
    FirstLayerComment.findById(getFirstCommentLocalId(id), (err, fComment) => {
        next(fComment);
    })
};

export const updateStatus = (id, status, userId, next) => {
    getFComment(id, (fComment) => {
        console.log('fick ' + fComment);
        if (!fComment) {
            next(null);
            return;
        }
        getStoreFromPostId(fComment.postId, (store) => {
            console.log(userId + ' ' + store.owner);
            if (store.owner === userId) {
                switch (fComment.status) {
                    case 'new':
                        if (status !== 'received' && status !== 'done') {
                            next(null);
                            return;
                        }
                        break;
                    case 'received':
                        if (status !== 'done') {
                            next(null);
                            return;
                        }
                        break;
                    default:
                        next(null);
                        return;
                }
                fComment.status = status;
                fComment.save((err) => {
                    if (err) {
                        console.log('update err');
                        next(null);
                    } else {
                        firstLayerCommentUpdated({fCommentId: getFirstCommentGlobalId(fComment._id), status: fComment.status});
                        next(fComment);
                    }
                })
            } else {
                next(null);
            }
        });
    })
};