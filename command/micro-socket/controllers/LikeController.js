import { addLikePub, removeLikePub } from './LikePubController'

export const likeAct = (action, sio, io) => {
    const likerId = action.data.userID;
    let likenId;
    if (action.data.commentid) likenId = action.data.commentid;
    else {
        if (action.data.leadercommentid) likenId = action.data.leadercommentid;
        else {
            if (action.data.sellpostid) likenId = action.data.sellpostid;
        }
    }
    addLikePub(likerId, action.data.sellpostid, action.data.leadercommentid, action.data.commentid, (like) => {
        console.log('like ' + like, JSON.stringify(like));
        if (like.sellPostId)
            io.to(like.sellPostId).emit('action', {type: 'global/LIKE', data: {
                userId: likerId,
                userName: action.data.user.username,
                avatarUrl: action.data.user.avatarUrl,
                sellpostid: like.sellPostId,
                leadercommentid: like.fCommentId,
                commentid: like.sCommentId,
                type: like.type
            }});
        sio.emit('action', {type: 'client/LIKE', data: {
            userId: likerId,
            userName: action.data.user.username,
            avatarUrl: action.data.user.avatarUrl,
            sellpostid: like.sellPostId,
            leadercommentid: like.fCommentId,
            commentid: like.sCommentId,
            type: like.type
        }});
    })
};

export const unlikeAct = (action, sio, io) => {
    const likerId = action.data.userID;
    let likenId;
    if (action.data.commentid) likenId = action.data.commentid;
    else {
        if (action.data.leadercommentid) likenId = action.data.leadercommentid;
        else {
            if (action.data.sellpostid) likenId = action.data.sellpostid;
        }
    }
    removeLikePub(likerId, likenId, (like) => {
        console.log('like ' + like, JSON.stringify(like));
        if (like.sellpostid)
            io.to(like.sellpostid).emit('action', {type: 'global/UNLIKE', data: {
                userId: likerId,
                userName: action.user.userName,
                avatarUrl: action.user.avatarUrl,
                sellpostid: action.data.sellpostid,
                leadercommentid: action.data.leadercommentid,
                commentid: action.data.commentid
            }});
        sio.emit('action', {type: 'client/UNLIKE', data: {
            userId: likerId,
            userName: action.user.userName,
            avatarUrl: action.user.avatarUrl,
            sellpostid: action.data.sellpostid,
            leadercommentid: action.data.leadercommentid,
            commentid: action.data.commentid
        }});
    })
};