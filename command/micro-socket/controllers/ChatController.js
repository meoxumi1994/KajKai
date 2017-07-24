import { addNewMessagePub, getUnreadMessagePub, resetChatCountPub, readChatPub, addMemberPub, removeMemberPub, updateUIPub } from './ChatSocketPubController'

export const addNewMessageCon = (action, sio, io) => {
    console.log('action ' + JSON.stringify(action));
    addNewMessagePub(action.data, (mes, emitList) => {
        console.log('data ' + JSON.stringify({mes: mes, list: emitList}));
        for (let i = 0; i < emitList.length; ++i) {
            console.log(emitList[i]);
            io.to(emitList[i]).emit('action', {type: 'global/RECEIVE_MESSAGE', data: mes})
        }
        // sio.emit('action', {type: 'global/RECEIVE_MESSAGE', data: mes})
    })
};

export const getUnreadMessageCon = (userID, sio, io) => {
    if (!action.data.userID) return;
    getUnreadMessagePub(userID, (data) => {
        sio.emit('action', {type: 'global/UNREAD_CHATS', data: data})
    })
};

export const resetChatCountCon = (action, sio, io) => {
    if (!action.data.userID) return;
    resetChatCountPub(action.data.userID, (res) => {
        sio.emit('action', {type: 'client/RESET_UNREAD_CHATS_QUANTITY', data: {
            quantity: 0,
        }})
    })
};

export const readChatCon = (action, sio, io) => {
    if (!action.data.userID) return;
    readChatPub(action.data.userID, action.data.mesId, (mesId) => {
        sio.emit('action', {type: 'client/READ_CHAT', data: [mesId]})
    })
};

export const addMemberCon = (action, sio, io) => {
    if (!action.data.userID) return;
    console.log('action func ' + JSON.stringify(action));
    addMemberPub(action.data.mesId, action.data.members, (data, receiverId) => {
        data = {...data, id: action.data.id};
        console.log(receiverId);
        console.log('data ' + JSON.stringify(data));
        for (let i = 0; i < receiverId.length; ++i) {
            io.to(receiverId[i]).emit('action', {type: 'client/ADD_MEMBER', data: data})
        }
    })
};

export const removeMemberCon = (action, sio, io) => {
    if (!action.data.userID) return;
    removeMemberPub(action.data.mesId, action.data.memberId, (data, receiverId) => {
        for (let i = 0; i < receiverId.length; ++i) {
            io.to(receiverId[i]).emit('action', {type: 'client/REMOVE_MEMBER', data: action.data})
        }
    })
};

export const updateUICon = (action, sio, io) => {
    if (!action.data.userID) return;
    updateUIPub(action.data.mesId, action.data.data, (data, receiverId) => {
        for (let i = 0; i < receiverId.length; ++i) {
            io.to(receiverId[i]).emit('action', {type: 'client/UPDATE_UI', data: action.data})
        }
    })
};
