import { addNewSecondLayerCommentPub, addNewFirstLayerCommentPub, getMoreFirstLayerComments, getMoreSecondLayerComments, addNewFollow, updateOrder } from './CommentSocketPubController'
import { getListFollower } from './FollowPubController'

export const joinPostCon = (action, sio, io) => {
    if (action.data.sellpostid) {
        sio.join(action.data.sellpostid)
    } else {
        sio.join(action.data.minorpostid)
    }
};

export const joinFirstLayerCommentCon = (action, sio, io) => {
    if (action.data.leadercommentid) {
        sio.leave(action.data.length);
    }
};

export const leavePostCon = (action, sio, io) => {
    if (action.data.sellpostid) {
        sio.leave(action.data.sellpostid)
    } else {
        sio.leave(action.data.minorpostid)
    }
};

export const addNewSecondLayerCommentCon = (action, sio, io) => {
    addNewSecondLayerCommentPub(action.data, (sComment) => {
        console.log('new second comment ' + JSON.stringify(sComment));
        io.to(action.data.sellpostid).emit('action', {type: 'client/COMMENT', data: sComment});
        getListFollower(action.data.sellpostid, (list) => {
            const newId = sComment.user ? sComment.user : sComment.commenterid;
            if (list.indexOf(newId) === -1) {
                list.push(newId);
            }
            for (let i = 0; i < list.length; ++i) {
                io.to(list[i]).emit('action', {type: 'global/COMMENT', data: sComment});
            }
        });
        if (sComment.user) {
            addNewFollow(sComment.user, action.data.sellpostid);
        } else {
            addNewFollow(sComment.commenterid, action.data.sellpostid);
        }
    })
};

export const addNewFirstLayerCommentCon = (action, sio, io) => {
    addNewFirstLayerCommentPub(action.data, (fComment) => {
        console.log("new first comment " + JSON.stringify(fComment));
        if (action.data.sellpostid) {
            io.to(action.data.sellpostid).emit('action', {type: 'client/LEADERCOMMENT', data: fComment})
        } else {
            io.to(action.data.minorpostid).emit('action', {type: 'client/LEADERCOMMENT', data: fComment})
        }
        getListFollower(action.data.sellpostid, (list) => {
            const newId = fComment.user ? fComment.user : fComment.commenterid;
            if (list.indexOf(newId) === -1) {
                list.push(newId);
            }
            for (let i = 0; i < list.length; ++i) {
                io.to(list[i]).emit('action', {type: 'global/LEADERCOMMENT', data: fComment});
            }
        });
        if (fComment.user) {
            addNewFollow(fComment.user, action.data.sellpostid);
        } else {
            addNewFollow(fComment.commenterid, action.data.sellpostid);
        }
    })
};

export const currentSecondLayerCommentCon = (action, sio, io) => {
    sio.to(action.data.leadercommentid).emit('action', {type: 'client/COMMENT_ING', data: action.data})
};

export const currentFirstLayerCommentCon = (action, sio, io) => {
    const postId = (action.data.sellpostid) ? action.data.sellpostid : action.data.minorpostid;
    sio.to(postId).emit('action', {type: 'client/LEADERCOMMENT_ING', data: action.data})
};

export const getSecondLayerCommentCon = (action, sio, io) => {
    getMoreSecondLayerComments(action.data, (comments) => {
        sio.emit('action', {type: 'client/GET_MORE_COMMEN', data: comments})
    })
};

export const getFirstLayerCommentCon = (action, sio, io) => {
    getMoreFirstLayerComments(action.data, (comments) => {
        sio.emit('action', {type: 'client/GET_MORE_LEADERCOMMENT', data: comments})
    });
};

export const storeReceiveOrder = (action, sio, io) => {
    if (!action.data || !action.data.userID) return;
    updateOrder(action.data.leadercommentid, action.data.status ? action.data.status : 'received', action.data.userID, (status, sellPostId, posterId) => {
        // sio.emit('action', {type: 'client/RECEIVE', data: {
        //     leadercommentid: action.data.leadercommentid,
        //     status: status
        // }});
        sio.emit('action', {
            type: 'global/RECEIVE', data: {
                leadercommentid: action.data.leadercommentid,
                status: status
            }
        });
        io.to(posterId).emit('action', {
            type: 'global/RECEIVE', data: {
                leadercommentid: action.data.leadercommentid,
                status: status
            }
        });
        if (sellPostId) {
            io.to(action.data.sellpostid ? action.data.sellpostid : sellPostId).emit('action', {
                type: 'client/RECEIVE', data: {
                    leadercommentid: action.data.leadercommentid,
                    status: status
                }
            });
        }
    });
};

export const storeFinishedOrder = (action, sio, io) => {
    if (!action.data || !action.data.userID) return;
    updateOrder(action.data.leadercommentid, action.data.status ? action.data.status : 'done', action.data.userID, (status, sellPostId) => {
        sio.emit('action', {type: 'global/DONE', data: {
            leadercommentid: action.data.leadercommentid,
            status: status
        }});
    });
};

