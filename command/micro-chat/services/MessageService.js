import { Message } from '../models'
import { getGroupMessage } from './MessageGroupService'
import { getMessageContent } from './MessageContentService'
import { updateCounterMultiple, getUnreadCounter, updateCounter } from './UnreadMessageCountService'
import { messageCreatedPub, messageReadPub } from '../controllers/ChatPubController'
import globalId from '../config/globalId'

const MESSAGE_GLOBAL_ID = globalId.MESSAGE_GLOBAL_ID;

export const getMesGlobalId = (id) => {
    return MESSAGE_GLOBAL_ID + id;
};

export const getMesLocalId = (id) => {
    if (id.length <= 3) return id;
    else return id.substr(3, id.length - 3);
};

export const addNewMessage = (mesInfo, next) => {
    const message = {mesId: mesInfo.mesId, senderId: mesInfo.id, time: mesInfo.time,
                                message: getMessageContent(mesInfo.message)};
    getGroupMessage(mesInfo.mesId, (group) => {
        if (!group) {
            next(null)
        } else {
            let arr = [];
            for (let i = 0; i < group.members.length; ++i) {
                const curMessage = new Message({...message, owner: group.members[i], read: group.members[i] === mesInfo.id});
                arr.push(curMessage);
            }
            let userIds = [];
            for (let i = 0; i < group.members.length; ++i) {
                if (group.members[i] !== mesInfo.id) {
                    userIds.push(group.members[i]);
                }
            }
            updateCounterMultiple(userIds, 1, () => {
                Message.insertMany(arr, (err, docs) => {
                    next(message, group.members);
                });
            });
            messageCreatedPub(message, group.members)
        }
    })
};

export const getUnreadMessage = (userId, next) => {
    getUnreadCounter(userId, (quantity) => {
        Message.find({owner: userId, read: false}, (err, docs) => {
            var idArr = [];
            for (var i = 0; i < docs.length; ++i) {
                var has = false;
                for (var j = 0; j < idArr.length; ++j)
                    if (idArr[j] === docs[i].mesId) {
                        has = true;
                        break;
                    }
                if (!has) idArr.push(docs[i].mesId);
            }
            next({quantity: quantity, messages: idArr})
        })
    })
};


export const updateRead = (userId, mesId, next) => {
    Message.updateMany({owner: userId, read: false, mesId: mesId}, {$set: {read: true}}, () => {
        messageReadPub(userId, mesId);
        updateCounter(userId, () => {
            next();
        })
    })
};

