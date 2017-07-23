import { updateFollowPub } from './FollowPubController'

export const updateFollowCon = (action, sio, io) => {
    if (!action.data.userID || !action.data.id) return;
    let storeId = null;
    let sellPostId = null;
    if (action.data.type === 'store') storeId = action.data.id;
    else sellPostId = action.data.id;
    updateFollowPub(action.userID, storeId, sellPostId, (follow) => {
        sio.emit('action', {type: 'client/FOLLOW', data: {
            type: action.data.type,
            id: action.data.id,
            status: follow.type
        }});
        if (follow.type === 'remove') {
            sio.leave(action.data.id);
        } else {
            sio.join(action.data.id);
        }
    })
};