import { updateSellPostPub } from './SellPostPubController'

export const updateSellPostCon = (action, sio, io) => {
    if (!action.data.userID) return;
    updateSellPostPub(action.data.id, action.data.status, (res) => {
        if (res) {
            io.to(action.data.id).emit('action', {type: 'client/CHANGE_SELLPOST', data: {
                status: action.data.status,
                id: action.data.id
            }});
        } else {
            sio.emit('action', {
                type: 'global/ERROR',
                data: {
                    status: 'auth_failed'
                }
            })
        }
    })
};