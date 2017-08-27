import { UserChat } from '../models'
import jwt from 'jsonwebtoken'

export const getUserChats = (userId, offset, length, next) => {

  UserChat.findOne({ userId }, (err, userChat) => {
    if (err || !userChat) {
      if (err) {
        next(null)
      } else {
        next({
          lazyLoad: {
            offset
          },
          data: []
        })
      }
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
              time: lastMessage.time.getTime(),
              message: lastMessage.content ? lastMessage.content : {}
            }
            mChat.displayLabel = chat.name ? chat.name : ''
            for (let k = 0; k < chat.users.length; k++) {
              if (chat.users[k].id == userId) {
                chat.users.splice(k, 1)
                break
              }
            }
            mChat.users = chat.users
            mChat.store = chat.store ? {
              id: chat.store.id,
              ownerId: chat.store.userId,
              storeUrl: chat.store.urlName,
              storeName: chat.store.storeName,
              storeAvatar: chat.store.avatarUrl
            } : null

            mChats.push(mChat)

            mOffset = chat.lastMessageTime.getTime()
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
      console.log('err', err);
        return null;
    }
}
