import { addLikePub } from './LikePubController'
import { getListFollower } from './FollowPubController'


export const likeAct = (action, sio, io) => {
    if (!action.data.userID) {
        sio.emit('action', {type: 'global/ERROR', data: {
            status: 'auth_failed'
        }});
        return;
    }
    const likerId = action.data.userID;
    let likenType;
    if (action.data.commentid)
        likenType = 'comment';
    else {
        if (action.data.leadercommentid) likenType = 'leadercomment';
        else {
            if (action.data.sellpostid) likenType = 'sellpost';
        }
    }
    addLikePub(likerId, action.data.sellpostid, action.data.leadercommentid, action.data.commentid, (like) => {
        console.log('like ' + like, JSON.stringify(like));
        let data = {
            id: like.likerId, name: action.data.user.username, avatarUrl: action.data.user.avatarUrl,
            sellpostid: like.sellPostId, leadercommentid: like.fCommentId, commentid: like.sCommentId,
            status: like.type, type: likenType
        };
        if (like.name) {
            data = {
                id: like.likerId, name: like.name, avatarUrl: like.avatarUrl,
                sellpostid: like.sellPostId, leadercommentid: like.fCommentId, commentid: like.sCommentId,
                status: like.type, type: likenType
            };
        }
        if (like.sellPostId) {
            io.to(like.sellPostId).emit('action', {type: 'client/LIKE', data: data});
            getListFollower(like.sellPostId, (list) => {
                for (let i = 0; i < list.length; ++i) {
                    io.to(list[i]).emit('action', {type: 'global/LIKE', data: data});
                }
            })
        }
    })
};