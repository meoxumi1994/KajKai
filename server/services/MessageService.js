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
        redisClient.zrangebyscore(id, -time, 'inf', 'limit', 0, length - 1, function (err, reply) {
            if (err) next(null)
            else next(reply)
        })
    }
}
redisClient.zrange('5922e9bbd979c3394849e33d$5922efab7b5064397e930ee8', 0, 10, function (err, reply) {
    console.log(reply)
})

export const getChatListID = (person) => {
    return 'chatList$' + person
}

export const getChatList = (person, time, length, next) => {
    const id = getChatListID(person)
    redisClient.zrange(id, offset, offset + length - 1, function (err, reply) {
        if (err) next(null)
        else next(reply)
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
            updateChatLList(id[0], id[1], time, function (e) {
                next(e)
            })
        }
    })
}