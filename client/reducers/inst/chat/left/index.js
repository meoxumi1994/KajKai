
const left = (state = {
  chatListKey: [],
  chatListMap: {},
  unreadChat: {},
  currentChat: {
    mesId: '',
  }
}, action) => {
    switch (action.type) {

      case 'UPDATE_CHAT_USER':
          const { username, avatarUrl, id } = action.data
          const mesid = action.data.mesId
          const updateChat = {
            ...state,
            chatListMap: {
              ...state.chatListMap,
              [mesid]: {
                ...state.chatListMap[mesid],
                displayLabel: username,
                usersKey: [
                  ...state.chatListMap[mesid].usersKey,
                  id
                ],
                usersMap: {
                  ...state.chatListMap[mesid].usersMap,
                  [id]: {
                    id,
                    avatarUrl,
                    username
                  }
                },
              }
            }
          }
          console.log('\n[Reducer Left] UPDATE_CHAT ', action, updateChat)
          return updateChat

      case 'global/RECEIVE_MESSAGE':
          const { mesId, user, message, time} = action.data

          if (state.chatListMap[mesId] == undefined || state.chatListMap[mesId].status == false) {
              const newChat = {
                  ...state,
                    chatListMap: {
                      ...state.chatListMap,
                      [mesId]: {
                          mesId,
                          displayLabel: user.username,
                          lastMessage: message,
                          status: true,
                          usersKey: [
                              user.id
                          ],
                          usersMap: {
                              [user.id]: {
                                  avatarUrl: user.avatarUrl,
                                  id: user.id,
                                  username: user.username
                              }
                          }

                      }
                  }
              }
              console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---newChat ', action, newChat)
              return newChat
          } else {
              const updateChat = {
                ...state,
                chatListMap: {
                    ...state.chatListMap,
                    [mesId]: {
                        ...state.chatListMap[mesId],
                        lastMessage: {
                            id: user.id,
                            time,
                            message
                        }
                    }
                }
              }
              console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---updateChat ', action, updateChat)
              return updateChat
          }


      case 'SET_CURRENT_CHAT':
          const setCurrentChat = {
            ...state,
            currentChat: {
                mesId: action.data.mesId
            }
          }
          console.log('\n[Reducer Left] SET_CURRENT_CHAT', action, setCurrentChat)
          return setCurrentChat

      case 'REMOVE_CHAT':
          var tempKey = state.chatListKey
          var tempMap = state.chatListMap
          tempKey.splice(action.data.mesId, 1)
          // delete tempMap[action.data.mesId]
          const removeChat = {
              ...state,
              chatListKey: tempKey,
              chatListMap: tempMap
          }
          console.log('\n[Reducer Left] REMOVE_CHAT ', action, removeChat)
          return removeChat

      case 'ADD_CHAT':
        if (state.chatListKey.indexOf(action.data.mesId) != -1) {
            const dontAdd = {
              ...state
            }
            console.log('\n[Reducer Left] ADD_CHAT ---dontAdd ', action, dontAdd)
            return dontAdd
        }
        const addChat = {
            ...state,
            chatListKey: [
                action.data.mesId,
                ...state.chatListKey,
            ],
            chatListMap: {
                ...state.chatListMap,
                [action.data.mesId]: {
                  displayLabel: action.data.label,
                  lastMessage: undefined,
                  mesId: action.data.mesId,
                  usersKey: [],
                  usersMap: {},
                  status: false
                }
            },
        }
        console.log('\n[Reducer Left] ADD_CHAT ---add ', action, addChat)
        return addChat

      case 'INIT_CHAT_LIST':
          if (action.data.length <= 0) {
              return state
          }
          const tempKey = []
          const tempMap = {}

          action.data.map (
            chat => {
              tempKey.push(chat.mesId)
              const tempUserKey = []
              const tempUserMap = {}
              let tempDisplayLabel = ''

              chat.users.map(user => {
                tempUserKey.push(user.id)
                tempUserMap[user.id] = user
                if (chat.displayLabel == undefined || chat.displayLabel == '') {
                  tempDisplayLabel += user.username + ', '
                }
              })

              tempMap[chat.mesId] = {
                mesId: chat.mesId,
                lastMessage: chat.lastMessage,
                displayLabel: tempDisplayLabel.trim().substring(0, tempDisplayLabel.length - 2),
                usersKey: tempUserKey,
                usersMap: tempUserMap,
                status: true
              }
            }
          )

          const initChatlist = {
            ...state,
            chatListKey: tempKey,
            chatListMap: tempMap
          }
          console.log('\n[Reducer Left] INIT_CHAT_LIST ', action, initChatlist)
          return initChatlist

        default:
          return state

    }
}

export default left
