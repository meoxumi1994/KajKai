import { FirstLayerComment, SecondLayerComment } from '../models'
import { getCurrentTime } from '../utils/Utils'
import { getOrder, getOrderInfo } from './OrderService'
import globalId from '../config/globalId'
import { getUser } from '../controllers/CommentPubController'

const FIRST_COMMENT_GLOBAL_ID = globalId.FIRST_COMMENT_GLOBAL_ID;
const SECOND_COMMENT_GLOBAL_ID = globalId.SECOND_COMMENT_GLOBAL_ID;

export const getFirstCommentGlobalId = (id) => {
    return FIRST_COMMENT_GLOBAL_ID + id
};

export const getSecondCommentGlobalId = (id) => {
    return SECOND_COMMENT_GLOBAL_ID + id
};

export const getSecondCommentLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3)
};

export const getFirstCommentLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3)
};

export const getListFirstComment = (postId, time, length, next) => {
    const query = FirstLayerComment.find({postId: postId, time: {$lt: time}}).sort({time: -1}).limit(length);
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

export const getFirstLayerComment = (id, next) => {
    FirstLayerComment.findById(getFirstCommentLocalId(id), (err, data) => {
        if (err) next(null);
        else next(data)
    })
};

// posterId: {type: String},
// content: {type: String},
// time: {type: Number},
// order: {type: OrderSchema},
// postId: {type: String},
// likeCounter: {type: Number},
// commentCounter: {type: Number}

export const getFirstLayerCommentInfo = (fComment, next) => {
    getUser(fComment.posterId, (user) => {
        if (!user) next(null);
        else {
            var info = {content: fComment.content, name: user.userName, avatarUrl: user.avatarUrl, commenterid: user.id, time: fComment.time,
                    order: getOrderInfo(fComment.order)};
            if (fComment.postId.startsWith(globalId.SELLPOST_GLOBAL_ID)) {
                info = {...info, sellpostid: fComment.postId}
            } else {
                info = {...info, minorpostid: fComment.postId};
            }
            next(info);
        }
    })
};

export const getSecondLayerCommentById = (id, next) => {
    SecondLayerComment.findById(id, (err, data) => {
        if (err) next(null);
        else next(data)
    })
};

export const saveNewFirstLayerComment = (posterId, posterAvatar, posterName, order, time, postId, content, next) => {
    var comment = new FirstLayerComment({posterId: posterId, posterName: posterName, posterAvatar: posterAvatar,
                            order: order, time: time, postId: postId, content: content});

    createNewEmit({type: 'FistLayerComment', lastTime: getCurrentTime()}, (emitDetail) => {
        comment.emitId = emitDetail._id
        comment.save(function (err) {
            addNewEmitSocketDetail(comment.emitId, posterId, (emitSocketDetail) => {
                getPost(comment.postId, function (storePost) {
                    storePost.commentCounter++;
                    addNewEmitSocketDetail(storePost.emitId, posterId, (emitSocket) => {
                        storePost.save(function (err) {
                            if (err) next(null);
                            else next(comment)
                        })
                    })
                })
            })

        })
    })
};

export const addNewComment = (postId, data, userId, storeId, next) => {
    var order = null;
    if (data.products.length > 0) order = getOrder(data.products)

    getStore(storeId, function (store) {
        if (!store) {
            getUser(userId, function (user) {
                if (!user) {
                    next(null)
                } else {
                    saveNewFirstLayerComment(user._id, user.avatarUrl, user.name, order, data.time, postId, data.content, (comment) => {
                        next(comment)
                    })
                }
            })
        } else {
            if (userId === store.owner) {
                saveNewFirstLayerComment(store._id, store.avatarUrl, store.storename, order, data.time, postId, data.content, (comment) => {
                    next(comment)
                })
            } else {
                getUser(userId, function (user) {
                    if (!user) {
                        next(null)

                    } else {
                        saveNewFirstLayerComment(user._id, user.avatarUrl, user.name, order, data.time, postId, data.content, (comment) => {
                            next(comment)
                        })
                    }
                })
            }
        }
    })
};

export const getSecondLayerComment = (postId, time, length, next) => {
    var query = SecondLayerComment.find({postId: postId, time: {$lt: time}}).sort({time: -1}).limit(length)
    query.exec((err, data) => {
        if (err) next(null);
        else {
            data.sort((a, b) => {
                return a.time - b.time
            });
            next(data)
        }
    })
};

export const saveNewSecondLayerComment = (posterId, posterAvatar, posterName, time, postId, content) => {
    var comment = new SecondLayerComment({posterId: posterId, posterAvatar: posterAvatar, posterName: posterName,
                                    time: time, postId: postId, content: content})
    getFirstLayerComment(postId, (firstComment) => {
        addNewEmitSocketDetail(firstComment.emitId, posterId, () => {
            firstComment.commentCounter++
            firstComment.save(function () {
                createNewEmit({type: 'SecondLayerComment', lastTime: getCurrentTime()}, (emitDetail) => {
                    comment.emitId = emitDetail._id;
                    addNewEmitSocketDetail(emitDetail._id, posterId, () => {
                        comment.save(() => {
                            next(comment)
                        })
                    })
                })
            })
        })
    })
};

export const addNewSecondLayerComment = (postId, data, userId, storeId, next) => {
    getStore(storeId, function (store) {
        if (!store) {
            getUser(userId, function (user) {
                if (!user) {
                    next(null)
                } else {
                    saveNewSecondLayerComment(user._id, user.avatarUrl, user.name, data.time, postId, content, (comment) => {
                        next(comment)
                    })
                }
            })
        } else {
            if (store.owner === userId) {
                saveNewSecondLayerComment(store._id, store.avatarUrl, store.storename, data.time, postId, content, (comment) => {
                    next(comment)
                })
            } else {
                getUser(userId, function (user) {
                    if (!user) {
                        next(null)
                    } else {
                        saveNewSecondLayerComment(user._id, user.avatarUrl, user.name, data.time, postId, content, (comment) => {
                            next(comment)
                        })
                    }
                })
            }
        }
    })
}