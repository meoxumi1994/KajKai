import { SecondLayerComment } from '../models'
import globalId from '../config/globalId'
import { getUser, getListUser, getStore, getStoreFromPostId, newSecondLayerCommentCreated } from '../controllers/CommentPubController'

const SECOND_COMMENT_GLOBAL_ID = globalId.SECOND_COMMENT_GLOBAL_ID;
const USER_GLOBAL_ID = globalId.USER_GLOBAL_ID;
const SELL_POST_GLOBAL_ID = globalId.SELLPOST_GLOBAL_ID;

export const getSecondCommentGlobalId = (id) => {
    return SECOND_COMMENT_GLOBAL_ID + id
};

export const getSecondCommentLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3)
};

export const getListSecondComment = (fCommentId, time, length, next) => {
    const query = SecondLayerComment.find({postId: fCommentId, time: {$lt: time}}).sort({time: -1}).limit(length);
    query.exec(function (err, data){
        if (err) next(null);
        else {
            data.sort(function (a, b) {
                return a.time - b.time
            });
            next(data)
        }
    })
};

export const getSecondLayerCommentInfo = (sComment, next) => {
    if (sComment.posterId.startsWith(USER_GLOBAL_ID)) {
        getUser(sComment.posterId, (user) => {
            if (!user) next(null);
            else {
                let info = {
                    content: sComment.content,
                    name: user.userName,
                    avatarUrl: user.avatarUrl,
                    commenterid: sComment.posterId,
                    time: sComment.time,
                    id: getSecondCommentGlobalId(sComment._id),
                    leadercommentid: sComment.parentCommentId,
                    like: sComment.likeCounter
                };
                if (sComment.postId.startsWith(globalId.SELLPOST_GLOBAL_ID)) {
                    info = {...info, sellpostid: sComment.postId}
                } else {
                    info = {...info, minorpostid: sComment.postId};
                }
                next(info);
            }
        })
    } else {
        getStore(sComment.posterId, (store) => {
            if (!store) next(null);
            else {
                let info = {
                    content: sComment.content,
                    name: store.storeName,
                    avatarUrl: store.avatarUrl,
                    commenterid: sComment.posterId,
                    time: sComment.time,
                    id: getSecondCommentGlobalId(sComment._id),
                    leadercommentid: sComment.parentCommentId,
                    like: sComment.likeCounter,
                    urlname: store.urlName,
                    user: store.owner
                };
                if (sComment.postId.startsWith(globalId.SELLPOST_GLOBAL_ID)) {
                    info = {...info, sellpostid: sComment.postId}
                } else {
                    info = {...info, minorpostid: sComment.postId};
                }
                next(info);
            }
        })
    }
};

export const getSecondLayerCommentById = (id, next) => {
    SecondLayerComment.findById(getSecondCommentLocalId(id), (err, data) => {
        if (err) next(null);
        else next(data)
    })
};

export const getSecondLayerCommentPubInfo = (sComment) => {
    let data = {posterId: sComment.posterId, time: sComment.time,
        content: sComment.content, parentCommentId: sComment.parentCommentId,
        sCommentId: getSecondCommentGlobalId(sComment._id)};
    if (sComment.postId.startsWith(SELL_POST_GLOBAL_ID)) {
        data = {...data, sellPostId: sComment.postId};
    } else {
        data = {...data, minorPostId: sComment.postId};
    }
    return data;
};

export const saveNewScondLayerComment = (posterId, time, postId, content, parentCommentId, next) => {
    let comment = new SecondLayerComment({posterId: posterId, time: time,
        postId: postId, content: content, parentCommentId: parentCommentId});
    comment.save(function (err) {
        newSecondLayerCommentCreated(getSecondLayerCommentPubInfo(comment));
        next(comment);
    })
};

export const addNewSecondLayerComment = (data, next) => {
    console.log('thisss ' + JSON.stringify(data));
    getStoreFromPostId(data.sellpostid, (store) => {
        if (data.userID === store.owner) {
            saveNewScondLayerComment(store.storeId, data.time, data.sellpostid, data.content, data.leadercommentid, (comment) => {
                next(comment)
            })
        } else {
            saveNewScondLayerComment(data.userID, data.time, data.sellpostid, data.content, data.leadercommentid, (comment) => {
                next(comment);
            })
        }
    });
};
