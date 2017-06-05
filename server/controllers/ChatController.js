import {getMessageList, getChatList, addNewMessage, getMessageId, getLastMessage, getWaitingServiceId} from '../services/MessageService'
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
                    getLastMessage(id, data, data.length, (new Date()).getTime(), function (lastMessages) {
                        console.log(lastMessages)
                        var chatList = UserService.getChatUserListInfo(docs)
                        for (var i = 0; i < chatList.length; ++i) {
                            chatList[i] = {...chatList[i], lastMessage: lastMessages[i]}
                        }
                        console.log(chatList)
                        res.json({chatList: chatList})
                    })
                })
            }
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

export const joinChat = (action, sio, io) => {
    const id = action.data.person
    const myId = action.data.userID
    console.log(action.data)
    console.log(myId)
    const mesId = getMessageId(id, myId)
    sio.join(mesId)
    var time = (new Date()).getTime()
    var length = 20
    if (action.data.time) time = action.data.time
    if (action.data.length) length = action.data.length
    getMessageList(id, myId, time, length, function (messList) {
        UserService.getUser(id, function (user) {
            sio.emit('action', {type: 'client/INIT_MESSAGE', data: {
                mesId: mesId,
                messages: messList,
                user: UserService.getChatUserInfo(user)
            }})
        })
    })
}

export const leaveChat = (action, sio, io) => {
    const mesId = getMessageId(action.data.person, action.data.userID)
    sio.leave(mesId)
}

export const addMessage = (action, sio, io) => {
    const data  = action.data
    const myId = data.userID
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
            var pId = data.mesId.split('$')
            if (pId !== myId) {
                getLastMessage(myId, [pId], 1, data.time, function (lastMessages) {
                    var chatList = UserService.getChatUserListInfo(docs)
                    for (var i = 0; i < chatList.length; ++i) {
                        chatList[i] = {...chatList[i], lastMessage: lastMessages[i]}
                    }
                    console.log(chatList)
                    io.to(getWaitingServiceId(pId).emit('action', {type: 'client/CHAT_WAITING', data: chatList})
                })
            }
        }
    })
}


export const joinChatWaiting = (action, sio, io) => {
    const id = getWaitingServiceId(action.data.userID)
    sio.join(id)
    var offset = (new Date()).getTime()
    if (action.data.offset) offset = action.data.offset
    var length = 10
    if (action.data.length) length = 10
    getChatList(action.data.userID, offset, length, function (data) {
        if (!data) {}
        else {
            UserService.getListUser(data, function (docs) {
                getLastMessage(id, data, data.length, (new Date()).getTime(), function (lastMessages) {
                    var chatList = UserService.getChatUserListInfo(docs)
                    for (var i = 0; i < chatList.length; ++i) {
                        chatList[i] = {...chatList[i], lastMessage: lastMessages[i]}
                    }
                    console.log(chatList)
                    //res.json({chatList: chatList})
                    sio.emit('action', {type: 'client/CHAT_WAITING', data: chatList})
                })
            })
        }
    })
}

export const stopChatWaiting = (action, sio, io) => {
    sio.leave(getWaitingServiceId(action.data.userID))
}
