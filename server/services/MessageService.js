import { Message } from '../models/Message'
import { redisClient } from '../datasource'

export const getMessageId = (person1, person2) => {
    var cmp = person1.localeCompare(person2)
    var id;
    if (cmp == 0) return null
    if (cmp < 0) return person1 + '$' + person2
    else return person2 + '$' + person1
}

export const getMessageList = (person1, person2, offset, length, next) => {
    const mesID = getMessageId(person1, person2)
    console.log(mesID)
    if (!mesID) {
        next(null)
    } else {
        redisClient.zrange(mesID, offset, offset + length - 1, function (err, reply) {
            console.log(reply)
            next(reply)
        })
    }
}

export const getChatListID = (person) => {
    return 'chatList$' + person
}

export const getChatList = (person, offset, length, next) => {
    const id = getChatListID(person)
    redisClient.zrange(id, offset, offset + length - 1, function (err, reply) {
        console.log(reply)
        next(reply)
    })
}

export const addNewMessage = (person1, person2, message, time) =>{
    const mesID = getMessageId(person1, person2)
    if (!mesID) {
        next(null)
    } else {
        var mes = new Message(person2, message, time)
        redisClient.zadd(id, -time, mes, function (err) {
            next(err)
        })
    }
}