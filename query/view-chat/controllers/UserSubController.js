import { BasicUser, Chat, UserChat } from '../models'

export const createBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = new BasicUser({ id })

  if (username) basicUser.username = username
  if (avatarUrl) basicUser.avatarUrl = avatarUrl

  basicUser.save(() => {})
}

export const updateBasicUser = (message) => {
  const { id, username, avatarUrl } = message.user
  const basicUser = {}

  if (avatarUrl) basicUser.avatarUrl = avatarUrl
  if (username) basicUser.username = username

  BasicUser.findOneAndUpdate({ id }, basicUser, () => {})
  Chat.find({}, (err, chats) => {
    if (chats) {
      for (let i = 0; i < chats.length; i++) {
        let chat = chats[i]
        let { users } = chat
        for (let k = 0; k < users.length; k++) {
          let user = users[k]
          if (user.id == id) {
            if (username) user.username = username
            if (avatarUrl) user.avatarUrl = avatarUrl
            users[k] = user
          }
        }
        chat.users = users
        chat.save()
      }
    }
  })

  UserChat.find({}, (err, userChats) => {
    if (userChats) {
      for (let i = 0; i < userChats.length; i++) {
        let userChat = userChats[i]
        let { chats } = userChat
        for (let k = 0; k < chats.length; k++) {
          let { users } = chats[k]
          for (let h = 0; h < users.length; h++) {
            let user = users[h]
            if (user.id == id) {
              if (username) user.username = username
              if (avatarUrl) user.avatarUrl = avatarUrl
              users[h] = user
            }
          }
          chats[k].users = users
        }
        userChat.chats = chats
        userChat.save()
      }
    }
  })
}

const updateChat = (chat, userId, username, avatarUrl) => {
  let { users } = chat
  for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.id == userId) {
      if (username) user.username = username
      if (avatarUrl) user.avatarUrl = avatarUrl
      users[i] = user
    }
  }
  chat.users = users
  chat.save()
}
