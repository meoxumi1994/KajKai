import { Message } from '../models'
import { getGroupMessage } from './MessageGroupService'
import { getMessageContent } from './MessageContentService'

export const addNewMessage = (mesInfo, next) => {
    const message = {mesId: mesInfo.mesId, senderId: mesInfo.id, time: mesInfo.time,
                                message: getMessageContent(mesInfo.message)};
    getGroupMessage(mesInfo.mesId, (group) => {
        if (!group) {
            next(null)
        } else {
            var arr = [];
            for (var i = 0; i < group.members.length; ++i) {
                const curMessage = new Message({...message, owner: group.members[i], read: group.members[i] === mesInfo.id});
                arr.push(curMessage);
            }
            Message.insertMany(curMessage, (err, docs) => {
                next(message, group.members);
            })
        }
    })
};