import {getMessageList, getChatList, addNewMessage, getMessageId} from '../services/MessageService'
import UserService from '../services/UserService'

export const getChatBuddies = () => {
    return (req, res) => {
        var id = req.decoded._id
        var offset = req.body.offset
        var length = req.body.length
        getChatList(id, offset, length, function (data) {
            if (!data) res.json({chatList : data})
            else {
                UserService.getListUser(data, function (docs) {
                    res.json({chatList: UserService.getChatUserListInfo(docs)})
                })
            }
        })
    }
}

export const getMessages = () => {
    return (req, res) => {
        var person1 = req.decoded._id
        var person2 = req.body.id
        var offset = req.body.offset
        var length = req.body.length
        getMessageList(person1, person2, offset, length, function (data) {
            res.json({messages: data})
        })
    }
}

export const addMessage = () => {
    return (req, res) => {
        var mesId = req.body.mesId
        var person = req.body.person
        var message = req.body.message
        var time = req.body.time
        addNewMessage(mesId, person, message, time, function (err) {
            if (err) res.json({status: 'failed'})
            else res.json({status: 'success'})
        })
    }
}

export const getChatID = () => {
    return (req, res) => {
        var id = req.decoded._id
        var person = req.body.person
        res.json({id: getMessageId(id, person)})
    }
}

