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

      chat.users.map((user) => {
        UserChat.findOne({ userId: user.id }, (err, userChat) => {
          let mChat = { ...chat }
          for (let i = 0; i < mChat.users.length; i++) {
            if (mChat.users[i].id == user.id) {
              mChat.users.splice(i, 1)
              break
            }
          }
          if (userChat) {
            userChat.chats.push(mChat)
            userChat.save()
          } else {
            const mUserChat = new UserChat({
              userId: user.id,
              chats: [mChat]
            })
            mUserChat.save()
          }
        })
      })
    }, err => {
      console.log('error', err)
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

          chat.users.map((user) => {
            UserChat.findOne({ userId: user.id }, (err, userChat) => {
              let mChat = { ...chat }
              for (let i = 0; i < mChat.users.length; i++) {
                if (mChat.users[i].id == user.id) {
                  mChat.users.splice(i, 1)
                  break
                }
              }
              if (userChat) {
                const { chats } = userChat
                for (let i = 0; i < chats.length; i++) {
                  if (chats[i].id == chat.id) {
                    chats[i] = mChat
                    break
                  } else if (i == chats.length - 1) {
                    chats.push(mChat)
                  }
                }

                userChat.chats = chats
                userChat.save()
              }
            })
          })
        }, err => {
          console.log('error', err)
        })
      }
    }
  })
}
