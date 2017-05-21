import {getMessageList, getChatList} from '../services/MessageService'

export const getChatBuddies = () => {
    return (req, res) => {
        var id = req.decoded._id
        var offset = req.body.offset
        var length = req.body.length
        getChatList(id, offset, length, function (data) {
            res.json({chatList : data})
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

