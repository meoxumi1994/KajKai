import { Message } from '../models/Message'
import { redisClient } from '../datasource'
import {UserService} from '../services/UserService'

export const getMessageId = (person1, person2) => {
    var cmp = person1.localeCompare(person2)
    var id;
    if (cmp == 0) return null
    if (cmp < 0) return person1 + '$' + person2
    else return person2 + '$' + person1
}

export const getMessageList = (person1, person2, time, length, next) => {
    const mesID = getMessageId(person1, person2)
    // console.log(mesID + ' ' + offset + ' ' + (offset + length - 1))
    if (!mesID) {
        next(null)
    } else {
        // redisClient.zrange(mesID, offset, offset + length - 1, function (err, reply) {
        //     console.log(reply)
        //     next(reply)
        // })
        redisClient.zrangebyscore(mesID, -time, 'inf', 'limit', 0, length, function (err, reply) {
            if (err) next(null)
            else next(reply)
        })
    }
}
export const getChatListID = (person) => {
    return 'chatList$' + person
}

export const getLastMessage = (id, listId, index, time, next) => {
    // console.log('ffuck ' + id + ' ' + listId[index - 1])
    if (index > 1) {
        getLastMessage(id, listId, index - 1, time, function (lastMessages) {
            getMessageList(id, listId[index - 1], time, 1, function (message) {
                if (!message || message.length === 0) lastMessages.push(null)
                else lastMessages.push(message[0])
                console.log(message)
                next(lastMessages)
            })
        })
    } else {
        getMessageList(id, listId[index - 1], time, 1, function (message) {
            var arr = []
            console.log(message)
            if (message && message.length > 0) arr.push(message[0])
            else arr.push(null)
            next(arr)
        })
    }
}

export const getChatList = (person, offset, length, next) => {
    const id = getChatListID(person)
    redisClient.zrange(id, offset, offset + length - 1, function (err, reply) {
        if (err || reply.length === 0) next(null)
        else {
            next(reply)
        }
    })
    // redisClient.zrangebyscore(id, -time, 'inf', 'limit', 0, length - 1, function (err, reply) {
    //     if (err) next(null)
    //     else next(reply)
    // })
}



export const updateChatLList = (personA, personB, time, next) => {
    redisClient.zadd(getChatListID(personA), -time, personB, function (err) {
        if (err) next(err)
        else {
            redisClient.zadd(getChatListID(personB), -time, personA, function (err) {
                next(err)
            })
        }
    })
}

export const addNewMessage = (mesID, person, message, time, next) =>{
    var mes = JSON.stringify(new Message(person, message, time))
    console.log(mesID + ' ' + mes)
    redisClient.zadd(mesID, -time, mes, function (err) {
        if (err) next(err)
        else {
            var id = mesID.split('$')
            if (person === id[1]) {
                updateChatLList(id[0], id[1], time, function (e) {
                    next(e)
                })
            } else {
                updateChatLList(id[1], id[0], time, function (e) {
                    next(e)
                })
            }
        }
    })
}

export const getWaitingServiceId = (id) => {
    return 'waiting$' + id
}