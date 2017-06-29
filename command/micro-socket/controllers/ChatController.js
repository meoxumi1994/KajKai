import { addNewMessagePub, getUnreadMessagePub, resetChatCountPub, readChatPub, addMemberPub, removeMemberPub, updateUIPub } from './ChatSocketPubController'

export const addNewMessageCon = (action, sio, io) => {
    addNewMessagePub(action.data, (mes, emitList) => {
        for (var i = 0; i < emitList.length; ++i) {
            sio.to(emitList[i]).emit({type: 'global/RECEIVE_MESSAGE', data: mes})
        }
    })
};

export const getUnreadMessageCon = (action, sio, io) => {
    getUnreadMessagePub(action.data.userId, (data) => {
        sio.emit({type: 'global/UNREAD_CHATS', data: data})
    })
};

export const resetChatCountCon = (action, sio, io) => {
    resetChatCountPub(action.data.userId, (res) => {
        sio.emit({type: 'client/RESET_UNREAD_CHATS_QUANTITY', data: {
            quantity: 0,
        }})
    })
};

export const readChatCon = (action, sio, io) => {
    readChatPub(action.data.userId, action.data.mesId, (mesId) => {
        sio.emit({type: 'client/READ_CHAT', data: [mesId]})
    })
};

export const addMemberCon = (action, sio, io) => {
    addMemberPub(action.data.mesId, action.data.members, (data, receiverId) => {
        for (var i = 0; i < receiverId.length; ++i) {
            sio.emit({type: 'client/ADD_MEMBER', data: data})
        }
    })
};

export const removeMemberCon = (action, sio, io) => {
    removeMemberPub(action.data.mesId, action.data.memberId, (data, receiverId) => {
        for (var i = 0; i < receiverId.length; ++i) {
            sio.to(receiverId[i]).emit({type: 'client/REMOVE_MEMBER', data: action.data})
        }
    })
};

export const updateUICon = (action, sio, io) => {
    updateUIPub(action.data.mesId, action.data.data, (data, receiverId) => {
        for (var i = 0; i < receiverId.length; ++i) {
            sio.to(receiverId[i]).emit({type: 'server/UPDATE_UI', data: action.data})
        }
    })
};

