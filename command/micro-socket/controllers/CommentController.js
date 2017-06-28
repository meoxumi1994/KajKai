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
        sio.to(action.data.leadercommentid).emit({type: 'client/COMMENT', data: sComment})
    })
};

export const addNewFirstLayerCommentCon = (action, sio, io) => {
    addNewFirstLayerCommentPub(action.data, (fComment) => {
        if (action.data.sellpostid) {
            sio.to(action.data.sellpostid).emit({type: 'client/LEADERCOMMENT', data: fComment})
        } else {
            sio.to(action.data.minorpostid).emit({type: 'client/LEADERCOMMENT', data: fComment})
        }
    })
};

export const currentSecondLayerCommentCon = (action, sio, io) => {
    sio.to('leadercommentid').emit({type: 'client/COMMENT_ING', data: action.data})
};

export const currentFirstLayerCommentCon = (action, sio, io) => {
    const postId = (action.data.sellpostid) ? action.data.sellpostid : action.data.minorpostid;
    sio.to(postId).emit({type: 'client/LEADERCOMMENT_ING', data: action.data})
};

export const getSecondLayerCommentCon = (action, sio, io) => {
    getMoreSecondLayerComments(action.data, (comments) => {
        sio.emit({type: 'client/GET_MORE_COMMEN', data: comments})
    })
};

export const getFirstLayerCommentCon = (action, sio, io) => {
    getMoreFirstLayerComments(action.data, (comments) => {
        sio.emit({type: 'client/GET_MORE_LEADERCOMMENT', data: comments})
    });
};