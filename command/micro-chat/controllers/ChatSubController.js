import { addNewMessage, getUnreadMessage, updateRead } from '../services/MessageService'
import { createGroup, getGroupMessage, getMessageGroupInfo, updateGroupInfo, removeMember, addMember, getGroupFullInfo } from '../services/MessageGroupService'
import { setCounter } from '../services/UnreadMessageCountService'

export const addNewMessageSub = (message, next) => {
    addNewMessage(message.mesInfo, (chatMessage, listEmit) => {
        if (chatMessage) {
            next({status: 'success', mes: chatMessage, emitList: listEmit})
        } else {
            next({status: 'failed'})
        }
    })
};

export const joinMemberSub = (message, next) => {
    if (message.mesId) {
        createGroup(message.members, '', '#65a9ed', (group) => {
            getMessageGroupInfo(group, (info) => {
                next(info);
            })
        });
    } else {
        getGroupMessage(message.mesId, (group) => {
            getMessageGroupInfo(group, (info) => {
                next(info);
            })
        });
    }
};

export const updateGroupUISub = (message, next) => {
    updateGroupInfo(message.mesId, message.data, (group) => {
        if (group) {
            next({status: 'success', data: message, receiverId: group.receiverId});
        } else {
            next({status: 'failed'})
        }
    })
};

export const getUnreadChatSub = (message, next) => {
    getUnreadMessage(message.userId, (data) => {
        if (data) {
            next({status: 'success', unread: data});
        } else {
            next({status: 'failed'})
        }
    })
};

export const resetUnreadCounterSub = (message, next) => {
    setCounter(message.userId, 0, () => {
        next({status: 'success'})
    })
};

export const messageRead = (message, next) => {
    updateRead(message.userId, message.mesId, () => {
        next({status: 'success', mesId: message.mesId})
    })
};

export const memberRemovedFromGroup = (message, next) => {
    removeMember(message.mesId, message.memberId, (group) => {
        next({status: 'success', data: message, receiverId: group.members})
    })
};

export const memberAddedToGroup = (message, next) => {
    if (message.mesId) {
        addMember(message.mesId, message.members, (infos, group) => {
            var data = message;
            data.members = infos;
            next({status: 'success', data: data, receiverId: group.members});
        })
    } else {
        createGroup(message.members, '', '#65a9ed', (group) => {
            getGroupFullInfo(group, (info) => {
                next({status: 'success', data: info, receiverId: group.members});
            })
        })
    }
};