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
      chat.save(() => {})

      chat.users.map((user) => {
        UserChat.findOne({ userId: user.id }, (err, userChat) => {
          if (userChat) {
            userChat.chats.push(chat)
            userChat.save(() => {})
          } else {
            const mUserChat = new UserChat({
              userId: user.id,
              chats: [chat]
            })
            mUserChat.save(() => {})
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
          // chat.save(() => {})

          const util = require('util')

          chat.users.map((user) => {
            UserChat.findOne({ userId: user.id }, (err, userChat) => {
              if (userChat) {
                let { chats } = userChat
                console.log('userChat 1: ', util.inspect(userChat, false, null));
                console.log('chats 1: ', util.inspect(chats, false, null));
                for (let i = 0; i < chats.length; i++) {
                  if (chats[i].id == chat.id) {
                    // chats[i] = chat
                    break
                  } else if (i == chats.length - 1) {
                    // chats.push(chat)
                  }
                }
                console.log('chats 2: ', util.inspect(chats, false, null));
                console.log('userChat 2: ', util.inspect(userChat, false, null));
                // userChat.chats = chats
                console.log('userChat 3: ', util.inspect(userChat, false, null));
                // userChat.save(() => {})
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
