import { addNewMessage, getMessageId, getLastMessageAndInfo, getMessageList2People, getMessageList } from '../services/MessageService'
import { emitDataToUser } from '../services/SocketService'

console.log('fuck chat controller')

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
        let time = req.body.time
        let length = req.body.length
        let mesId = req.body.mesId
        getMessageList(mesId, time, length, function (data) {
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