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

// export const addMessage = () => {
//     return (req, res) => {
//         var mesId = req.body.mesId
//         var person = req.body.person
//         var message = req.body.message
//         var time = req.body.time
//         addNewMessage(mesId, person, message, time, function (err) {
//             if (err) res.json({status: 'failed'})
//             else res.json({status: 'success'})
//         })
//     }
// }

export const getChatID = () => {
    return (req, res) => {
        var id = req.decoded._id
        var person = req.body.person
        res.json({id: getMessageId(id, person)})
    }
}

export const joinChat = (action, sio, io, myId) => {
    const id = action.data.person
    console.log(action.data)
    console.log(myId)
    const mesId = getMessageId(id, myId)
    sio.join(mesId)
}

export const leaveChat = (action, sio, io, myId) => {
    const mesId = getMessageId(action.data.person, myId)
    sio.leave(mesId)
}

export const addMessage = (action, sio, io, myId) => {
    const data  = action.data
    console.log(data)
    addNewMessage(data.mesId, myId, data.message, data.time, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log(data.mesId)
            io.to(data.mesId).emit('action', {type:'client/RECEIVE_MESSAGE', data: {
                mesId: data.mesId,
                time: data.time,
                message: data.message,
                person: myId
            }})
            // sio.emit('action', {type:'client/RECEIVE_MESSAGE', data: {
            //     mesId: data.mesId,
            //     time: data.time,
            //     message: data.message,
            //     person: myId
            // }})
        }
    })
}