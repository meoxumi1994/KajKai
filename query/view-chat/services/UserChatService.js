import { UserChat } from '../models'

export const getChats = (userId, offset, length, next) => {

  UserChat.findOne({ userId }, (err, userChat) => {
    if (err) {
      next(null)
    } else {
      const { chats } = userChat
      const mChats = []
      let currentNumberOfChat = 0, mOffset = -1

      for (let i = chats.length - 1; i >= 0; i--) {
        let chat = chats[i]
        if (chat.lastMessageTime && chat.lastMessageTime < offset) {
          if (currentNumberOfChat < length) {

            let mChat = {}, lastMessage = chat.messages[chat.messages.length - 1]
            mChat.mesId = chat.id
            mChat.lastMessage = {
              id: lastMessage.userId,
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
        data: mChats
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
