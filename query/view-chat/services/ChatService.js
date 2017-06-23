import { Chat } from '../models'

export const getChatMessages = (id, offset, length, next) => {

  Chat.findOne({ id }, (err, chat) => {
    if (err) {
      next(null)
    } else {
      const { messages } = chat
      const mChats = []
      let currentNumberOfChat = 0, mOffset = -1

      for (let i = messages.length - 1; i >= 0; i--) {
        let message = messages[i]
        if (chat.lastMessageTime && chat.lastMessageTime < offset) {
          if (currentNumberOfChat < length) {

            let mChat = {}, lastMessage = chat.messages[chat.messages.length - 1]
            mChat.mesId = chat.id
            mChat.lastMessage = {
              id: lastMessage.id,
              time: lastMessage.time,
              message: lastMessage.content
            }
            mChat.displayLabel = chat.name
            mChat.users = chat.users

            mChats.push(mChat)

            mOffset = chat.lastMessageTime
            currentNumberOfChat++
          } else {
            break
          }
        }
      }

      next({
        lazyLoad: {
          offset: mOffset
        },
        mesId: id,
        messages: [
          {
            id: //userId cái thằng mà chat cái mesage này hay còn gọi là sendId
            message: {
              text: '',
              url: '',
              type: ''
            },
            time: ''
          }
        ]
      })
    }
  })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}
