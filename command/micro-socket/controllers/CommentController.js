import { addNewSecondLayerCommentPub, addNewFirstLayerCommentPub, getMoreFirstLayerComments, getMoreSecondLayerComments } from './CommentSocketPubController'

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
        io.to(action.data.leadercommentid).emit('action', {type: 'client/COMMENT', data: sComment})
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

