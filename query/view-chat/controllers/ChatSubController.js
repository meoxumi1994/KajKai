import { Chat, UserChat, BasicUser, BasicStore } from '../models'

export const createChat = (message) => {
  const { groupId: id, groupName: name, members } = message.chatGroup

  let users, storeId
  if (members) {
    users = []
    for (let i = 0; i < members.length; i++) {
      let member = members[i]
      if (member.substr(0, 3) == '002') {
        storeId = member
      } else {
        users.push(member)
      }
    }
  }

  const chat = new Chat({
    id
  })

  if (storeId) {
    BasicStore.findOne({ id: storeId }, (err, basicStore) => {
      if (basicStore) {
        users.push(basicStore.userId)
        if (name) chat.name = name
        else chat.name = ''
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
            if (storeId) {
              BasicStore.findOne({ id: storeId }, (err, basicStore) => {
                if (basicStore) {
                  chat.store = basicStore
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
                }
              })
            } else {
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
            }
          }, err => {
            console.log('error', err)
          })
        }
      }
    })
  } else {
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
        if (storeId) {
          BasicStore.findOne({ id: storeId }, (err, basicStore) => {
            if (basicStore) {
              chat.store = basicStore
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
            }
          })
        } else {
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
        }
      }, err => {
        console.log('error', err)
      })
    }
  }
}

export const updateChat = (message) => {
  const { groupId: id, groupName: name, members: users, storeId } = message.chatGroup

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
          if (name) chat.name = name
          else chat.name = ''
          if (storeId) {
            BasicStore.findOne({ id: storeId }, (err, basicStore) => {
              if (basicStore) {
                chat.store = basicStore
                chat.save(() => {})
                chat.users.map((user) => {
                  UserChat.findOne({ userId: user.id }, (err, userChat) => {
                    if (userChat) {
                      let { chats } = userChat
                      for (let i = 0; i < chats.length; i++) {
                        if (chats[i].id == chat.id) {
                          chats[i].users = basicUsers
                          if (name) chats[i].name = name
                          else chats[i].name = ''
                          break
                        } else if (i == chats.length - 1) {
                          chats.push(chat)
                        }
                      }

                      userChat.chats = chats
                      userChat.save(() => {})
                    }
                  })
                })
              }
            })
          } else {
            chat.save(() => {})

            chat.users.map((user) => {
              UserChat.findOne({ userId: user.id }, (err, userChat) => {
                if (userChat) {
                  let { chats } = userChat
                  for (let i = 0; i < chats.length; i++) {
                    if (chats[i].id == chat.id) {
                      chats[i].users = basicUsers
                      if (name) chats[i].name = name
                      else chats[i].name = ''
                      break
                    } else if (i == chats.length - 1) {
                      chats.push(chat)
                    }
                  }

                  userChat.chats = chats
                  userChat.save(() => {})
                }
              })
            })
          }
        }, err => {
          console.log('error', err)
        })
      }
    }
  })
}
