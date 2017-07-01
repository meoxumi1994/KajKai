import { Chat, UserChat, BasicUser } from '../models'

export const createChat = (message) => {
  const { groupId: id, groupName: name, members: users } = message.chatGroup

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
  const { groupId: id, groupName: name, members: users } = message.chatGroup

  Chat.findOne({ id }, (err, chat) => {
    if (chat) {
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
          if (name) {
            chat.name = name
          }
          chat.save()
        }, err => {
          console.log('error', err)
        })

        chat.users.map((user) => {
          UserChat.findOne({ userId: user.id }, (err, userChat) => {
            if (userChat) {
              const { chats } = userChat
              for (let i = 0; i < chats.length; i++) {
                if (chats[i].id == chat.id) {
                  chats[i] = chat
                  break
                } else if (i == chats.length - 1) {
                  chats.push(chat)
                }
              }

              userChat.chats = chats
              userChat.save()
            }
          })
        })
      }
    }
  })
}