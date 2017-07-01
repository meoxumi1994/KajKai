import { addNewMessagePub, getUnreadMessagePub, resetChatCountPub, readChatPub, addMemberPub, removeMemberPub, updateUIPub } from './ChatSocketPubController'


// io.to(data.mesId).emit('action', {type:'client/RECEIVE_MESSAGE', data: {
//     mesId: data.mesId,
//     time: data.time,
//     message: data.message,
//     person: myId
// }})

export const addNewMessageCon = (action, sio, io) => {
    console.log('action ' + JSON.stringify(action));
    sio.emit('action', {type:'client/a', data: 'heeloclient'});
    sio.emit('action', {type:'global/a', data: 'helloglobal'});
    addNewMessagePub(action.data, (mes, emitList) => {
        console.log('data ' + JSON.stringify({mes: mes, list: emitList}));
        for (let i = 0; i < emitList.length; ++i) {
            sio.to(emitList[i]).emit('action', {type: 'global/RECEIVE_MESSAGE', data: mes})
        }
        sio.emit('action', {type: 'global/RECEIVE_MESSAGE', data: mes})
    })
};

export const getUnreadMessageCon = (action, sio, io) => {
    getUnreadMessagePub(action.data.userId, (data) => {
        sio.emit('action', {type: 'global/UNREAD_CHATS', data: data})
    })
};

export const resetChatCountCon = (action, sio, io) => {
    resetChatCountPub(action.data.userId, (res) => {
        sio.emit('action', {type: 'client/RESET_UNREAD_CHATS_QUANTITY', data: {
            quantity: 0,
        }})
    })
};

export const readChatCon = (action, sio, io) => {
    readChatPub(action.data.userId, action.data.mesId, (mesId) => {
        sio.emit('action', {type: 'client/READ_CHAT', data: [mesId]})
    })
};

export const addMemberCon = (action, sio, io) => {
    console.log('action func ' + action);
    addMemberPub(action.data.mesId, action.data.members, (data, receiverId) => {
        for (var i = 0; i < receiverId.length; ++i) {
            sio.emit('action', {type: 'client/ADD_MEMBER', data: data})
        }
    })
};

export const removeMemberCon = (action, sio, io) => {
    removeMemberPub(action.data.mesId, action.data.memberId, (data, receiverId) => {
        for (var i = 0; i < receiverId.length; ++i) {
            sio.to(receiverId[i]).emit('action', {type: 'client/REMOVE_MEMBER', data: action.data})
        }
    })
};

export const updateUICon = (action, sio, io) => {
    updateUIPub(action.data.mesId, action.data.data, (data, receiverId) => {
        for (var i = 0; i < receiverId.length; ++i) {
            sio.to(receiverId[i]).emit('action', {type: 'server/UPDATE_UI', data: action.data})
        }
    })
};

