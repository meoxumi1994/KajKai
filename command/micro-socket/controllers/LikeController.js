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
    addLikePub(likerId, likenId, (like) => {
        console.log('like ' + like, JSON.stringify(like));
        io.to(like.sellpostid).emit('action', {type: 'global/LIKE', data: {
            userId: likerId,
            userName: action.user.userName,
            avatarUrl: action.user.avatarUrl,
            sellpostid: action.data.sellpostid,
            leadercommentid: action.data.leadercommentid,
            commentid: action.data.commentid
        }});
        sio.emit('action', {type: 'client/LIKE', data: {
            userId: likerId,
            userName: action.user.userName,
            avatarUrl: action.user.avatarUrl,
            sellpostid: action.data.sellpostid,
            leadercommentid: action.data.leadercommentid,
            commentid: action.data.commentid
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