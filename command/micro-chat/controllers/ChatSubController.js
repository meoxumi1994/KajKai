import { addNewMessage } from '../services/MessageService'
import { createGroup, getGroupMessage, getMessageGroupInfo, updateGroupInfo } from '../services/MessageGroupService'

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
            next({status: 'success', data: message});
        } else {
            next({status: 'failed'})
        }
    })
};

// export const 