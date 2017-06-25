import { FirstLayerComment, SecondLayerComment } from '../models'
import { getCurrentTime } from '../utils/Utils'
import globalId from '../config/globalId'
import { getUser, getListUser, getStore, getStoreFromPostId } from '../controllers/CommentPubController'

const SECOND_COMMENT_GLOBAL_ID = globalId.SECOND_COMMENT_GLOBAL_ID;
const USER_GLOBAL_ID = globalId.USER_GLOBAL_ID;

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
                var info = {
                    content: sComment.content,
                    name: user.userName,
                    avatarUrl: user.avatarUrl,
                    commenterid: user.id,
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
                var info = {
                    content: sComment.content,
                    name: store.storeName,
                    avatarUrl: store.avatarUrl,
                    commenterid: store.id,
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
    }
};

export const getSecondLayerCommentById = (id, next) => {
    SecondLayerComment.findById(getSecondCommentLocalId(id), (err, data) => {
        if (err) next(null);
        else next(data)
    })
};

export const saveNewScondLayerComment = (posterId, time, postId, content, parentCommentId, next) => {
    var comment = new FirstLayerComment({posterId: posterId, time: time,
        postId: postId, content: content, parentCommentId: parentCommentId});
    comment.save(function (err) {
        next(comment);
    })
};

export const addNewSecondLayerComment = (data, next) => {
    getStoreFromPostId(data.postId, (store) => {
        if (data.userId === store.owner) {
            saveNewScondLayerComment(store.id, data.time, data.postId, data.content, data.leadercommentid, (comment) => {
                next(comment)
            })
        } else {
            saveNewScondLayerComment(data.userId, data.time, data.postId, data.content, data.leadercommentid, (comment) => {
                next(comment);
            })
        }
    });
};