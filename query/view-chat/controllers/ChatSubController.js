import { Chat, UserChat, BasicUser } from '../models'

export const createChat = (message) => {
  const { id, name, users } = message.chat

  const chat = new Chat({
    id
  })

  if (name) chat.name = name
  if (users) {
    const mPromises = []
    users.map((user) => {
      mPromises.push(new Promise((resolve, reject) => {
        BasicUser.findOne({ id: user }, (err, basicUser) => {
          if (basicUser) {
            resolve(basicUser)
          } else {
            reject(err)
          }
        })
      }))
    })

    Promise.all(mPromises).then((basicUsers) => {
      chat.users = basicUsers
      chat.save()
    }, err => {
      console.log('error', err)
    })

    chat.users.map((user) => {
      UserChat.findOne({ userId: user.id }, (err, userChat) => {
        if (userChat) {
          userChat.chats.push(chat)
          userChat.save()
        }
      })
    })
  }
}

export const updateChat = (message) => {
  const { id, userId } = message.chat

  if ('addMember') {
    addMember(id, userId)
  } else {
    removeMember(id, userId)
  }
}

const addMember = (id, userId) => {
  Chat.findOne({ id }, (err, chat) => {
    if (chat) {
      BasicUser.findOne({ id: userId }, (err, basicUser) => {
        if (basicUser) {
          chat.users.push(basicUser)
          chat.save()

          chat.users.map((user) => {
            UserChat.findOne({ userId: user.id }, (err, userChat) => {
              if (userChat) {
                let { chats } = userChat
                if (user.id == userId) {
                  if (!chats) {
                    chats = []
                  }
                  chats.push(chat)

                } else {
                  for (let i = 0; i < chats.length; i++) {
                    if (chats[i].id == id) {
                      chats[i] = chat
                      break
                    }
                  }
                }

                userChat.chats = chats
                userChat.save()
              }
            })
          })
        }
      })

    }
  })
}

const removeMember = (id, userId) => {
  Chat.findOne({ id }, (err, chat) => {
    if (chat) {
      const { users } = chat
      for (let i = 0; i < users.length; i++) {
        let user = users[i]
        if (user.id == userId) {
          let oldUser = users.splice(i, 1)
          chat.users = users
          chat.save()

          users.push(oldUser)

          users.map((user) => {
            UserChat.findOne({ userId: user.id }, (err, userChat) => {
              if (userChat) {
                const { chats } = userChat
                if (user.id == userId) {
                  for (let i = 0; i < chats.length; i++) {
                    if (chats[i].id == id) {
                      chats.splice(i, 1)
                      break
                    }
                  }

                } else {
                  for (let i = 0; i < chats.length; i++) {
                    if (chats[i].id == id) {
                      chats[i] = chat
                      break
                    }
                  }
                }

                userChat.chats = chats
                userChat.save()
              }
            })
          })

          break
        }
      }
    }
  })
}
