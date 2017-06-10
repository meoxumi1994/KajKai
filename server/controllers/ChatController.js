import {getMessageList, getChatList, addNewMessage, getMessageId, getLastMessage, getLastMessageAndInfo} from '../services/MessageService'
import { getUserRoomId, emitDataToUser } from '../services/SocketService'


export const getChatBuddies = () => {
    return (req, res) => {
        var id = req.decoded._id
        var offset = req.body.offset
        var length = req.body.length
        getLastMessageAndInfo(id, offset, length, function (data) {
            res.json({chatList: data})
        })
    }
}

export const getMessages = () => {
    return (req, res) => {
        var person1 = req.decoded._id
        var person2 = req.body.id
        var time = req.body.time
        var length = req.body.length
        getMessageList(person1, person2, time, length, function (data) {
            res.json(data)
        })
    }
}

export const getChatID = () => {
    return (req, res) => {
        var id = req.decoded._id
        var person = req.body.person
        getMessageId(id, person, function (mesId) {
            res.json({id: mesId})
        })
    }
}

export const addMessage = (action, sio, io) => {
    const data  = action.data
    const myId = data.userID
    console.log(data)
    addNewMessage(data.mesId, myId, data.message, data.time, function (err) {
        if (err) {
            console.log(err)
        } else {
            const emitData = {mesId: data.mesId, time: data.time, message: data.message, id: myId}
            emitDataToUser(data.mesId, emitData, 'client/CHAT_WAITING', io)
        }
    })
}