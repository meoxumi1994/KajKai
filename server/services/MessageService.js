import { Message } from '../models/Message'
import { MessageMapping } from '../models'
import { redisClient } from '../datasource'
import { addNewEmitSocketDetailList, getSubcriberDetailList, getEmitListDetail } from './SocketService'
import { createNewEmit, updateEmitInfo } from './EmitDetailService'

export const getMessageId = (person1, person2, next) => {
    var cmp = person1.localeCompare(person2)
    if (cmp === 0) return next(null)
    const trivialMesId = (cmp < 0) ? person1 + '$' + person2 : person2 + '$' + person1
    MessageMapping.findOne({trivialId: trivialMesId}, function (err, messageMapping) {
        if (messageMapping) next(messageMapping.emitId)
        else {
            addNewChatGroup([person1, person2], function (emitDetail) {
                const messageMapping = new MessageMapping({trivialId: trivialMesId, emitId: emitDetail._id})
                messageMapping.save(function () {
                    next(messageMapping.mesId)
                })
            })
        }
    })
}

export const getMessageList = (mesId, time, length, next) => {
    redisClient.zrangebyscore(mesId, -time, 'inf', 'limit', 0, length, function (err, reply) {
        if (err) next(null)
        else next(reply)
    })
}

export const getMessageList2People = (person1, person2, time, length, next) => {
    if (person1 === person2) {
        next(null)
    } else {
        getMessageId(person1, person2, function (mesId) {
            if (!mesId) next(null)
            else {
                getMessageList(mesId, time, length, function (reply) {
                    reply = {messages: reply, mesId: mesId}
                    next(reply)
                })
            }
        })
    }
}

export const addNewChatGroup = (idList, next) => {
    createNewEmit({lastTime: (new Date().getTime())}, function (emitDetail) {
        if (!emitDetail) next(null)
        else {
            addNewEmitSocketDetailList(emitDetail._id, idList, function (reply) {
                addChatListGroupUser(idList, emitDetail._id, function () {
                    next(emitDetail)
                })
            })
        }
    })
}

export const addChatListGroupUser = (listId, mesId, next) => {
    addChatListGroupUserRecur(listId, listId.length, mesId, function () {
        next()
    })
}

export const addChatListGroupUserRecur = (listId, index, mesId, next) => {
    if (index === 0) {
        next()
    } else {
        addChatListGroupUserRecur(listId, index - 1, mesId, function () {
            addChatListUser(listId[index - 1], mesId, function () {
                next()
            })
        })
    }
}

export const addChatListUser = (id, mesId, next) => {
    redisClient.zadd(getChatListID(id), -((new Date()).getTime()), mesId,function () {
        next()
    })
}

export const getChatListID = (person) => {
    return 'chatList$' + person
}

export const getLastMessage = (id, listId, time, next) => {
    getLastMessageRecur(id, listId, listId.length, time, function (lastMessageList) {
        next(lastMessageList)
    })
}

export const getLastMessageRecur = (id, listId, index, time, next) => {
    if (index > 0) {
        console.log('ffuck ' + id + ' ' + listId[index - 1])
        getLastMessageRecur(id, listId, index - 1, time, function (lastMessages) {
            getMessageList(listId[index - 1], time, 1, function (message) {
                if (!message || message.length === 0) lastMessages.push({})
                else lastMessages.push(message[0])
                console.log(message)
                next(lastMessages)
            })
        })
    } else {
        next([])
    }
}

export const getChatList = (person, offset, length, next) => {
    const id = getChatListID(person)
    redisClient.zrange(id, offset, offset + length - 1, function (err, reply) {
        if (err || reply.length === 0) next(null)
        else {
            if (reply instanceof Array)
                next(reply)
            else next([reply])
        }
    })
}

export const addNewMessage = (mesID, person, message, time, next) =>{
    var mes = JSON.stringify(new Message(person, message, time))
    console.log(mesID + ' ' + mes)
    redisClient.zadd(mesID, -time, mes, function (err) {
        if (err) next(err)
        else {
            updateEmitInfo(mesID, {lastTime: time}, function (emitDetail) {
                next(emitDetail)
            })
        }
    })
}

export const getLastMessageAndInfo = (userId, offset, length, next) => {
    getChatList(userId, offset, length, function (emitIDList) {
        console.log('emitId: ' + emitIDList)
        console.log(emitIDList instanceof Array)
        if (!emitIDList) {
            next([])
        } else {
            getEmitListDetail(emitIDList, function (emitDetailList) {
                console.log('emitDetail: ', emitDetailList)
                getLastMessage(userId, emitIDList, (new Date()).getTime(), function (lastMessageList) {
                    for (var i = 0, sz = emitDetailList.length; i < sz; ++i) {
                        emitDetailList[i] = {mesId: emitIDList[i], groupName: emitDetailList[i].name,
                            time: emitDetailList[i].lastTime, users: emitDetailList[i].followers, lastMessage: JSON.parse(lastMessageList[i])}
                    }
                    console.log('emitDetail: ' + emitIDList)
                    next(emitDetailList)
                })
            })
        }
    })
}

export const passChatList = (userId, sio, io) => {
    const offset = 0
    const length = 20
    getLastMessageAndInfo(userId, offset, length, function (lastMessageAndInfo) {
        sio.emit('action', {type: 'client/INIT_CHAT_LIST', data: lastMessageAndInfo})
    })
}
