import utils from './utils'
import chatMap from './chatMap'

const left = (state = {
  chatListKey: [],
  chatListMap: {},
  unreadChat: {},
  currentChat: {
    mesId: '',
    id: ''
  },
}, action) => {
    switch (action.type) {

      case 'client/REMOVE_MEMBER':
        //   console.log('\n[Reducer Left] client/REMOVE_MEMBER', action)
          return {
              ...state,
          }

      case 'global/UNREAD_CHATS':
        //   console.log('\n[Reducer Left] global/UNREAD_CHATS', action)
          return state

      case 'SET_USER_ID':
          const setUserId = {
              ...state,
              currentChat: {
                  ...state.currentChat,
                  id: action.data.id
              }
          }
          // console.log('\n[Reducer Left] SET_USER_ID', action, setUserId)
          return setUserId


      case 'SET_CURRENT_CHAT':
          const setCurrentChat = {
            ...state,
            currentChat: {
                ...state.currentChat,
                mesId: action.data.mesId
            }
          }
          // console.log('\n[Reducer Left] SET_CURRENT_CHAT', action, setCurrentChat)
          return setCurrentChat

      case 'DISPLAY_ADD_MEMBER':
          const displayAddMember = {
              ...state,
              chatListMap: {
                  ...state.chatListMap,
                  [action.data.mesId]: {
                      ...state.chatListMap[action.data.mesId],
                      display: {
                          ...state.chatListMap[action.data.mesId].display,
                          addMember: action.data.value == 'toggle'? !state.chatListMap[action.data.mesId].display.addMember: action.data.value
                      }
                  }
              }
          }
          // console.log('\n[Reducer Left] DISPLAY_ADD_MEMBER', action, displayAddMember)
          return displayAddMember

      case 'client/ADD_MEMBER':
          if (state.chatListKey.indexOf(action.data.mesId) == -1) {
              let sKey = []
              let sMap = {}
              let label = ''
              for ( let i in action.data.members) {
                  const member = action.data.members[i]
                  // console.log('---------------------------------');
                  // console.log('current chat ', state.currentChat.id);
                  // console.log('member ', member);
                  if (sKey.indexOf(member.id) == -1 && member.id != state.currentChat.id) {
                      sKey.push(member.id)
                      sMap[member.id] = {
                          avatarUrl: member.avatarUrl,
                          id: member.id,
                          username: member.username
                      }
                      label += member.username + ', '
                  }
              }
              const newChat = {
                  ...state,
                  currentChat: {
                      ...state.currentChat,
                      mesId: action.data.mesId
                  },
                  chatListKey: [
                      ...state.chatListKey,
                      action.data.mesId
                  ],
                  chatListMap: {
                      ...state.chatListMap,
                      [action.data.mesId]: {
                        mesId: action.data.mesId,
                        lastMessage: action.message,
                        displayLabel: label.substring(0, label.length - 2),
                        usersKey: sKey,
                        usersMap: sMap,
                        status: true,
                        display: {
                            addMember: false
                        }
                      }
                  }
              }
            //   console.log('\n[Reducer Left] client/ADD_MEMBER --newChat ', action, newChat)
              return newChat
          } else {
              let mKey = state.chatListMap[action.data.mesId].usersKey
              let mMap = state.chatListMap[action.data.mesId].usersMap
              let displayLabel = state.chatListMap[action.data.mesId].displayLabel

              for (let i in action.data.members) {
                  const member = action.data.members[i]
                  if (mKey.indexOf(member.id) == -1 && member.id != state.currentChat.id) {
                      mKey.push(member.id)
                      mMap[member.id] = {
                          avatarUrl: member.avatarUrl,
                          id: member.id,
                          username: member.username
                      }
                      displayLabel += ', ' + member.username
                  }
              }
              const addMember = {
                  ...state,
                  chatListMap: {
                      ...state.chatListMap,
                      [action.data.mesId]: {
                          ...state.chatListMap[action.data.mesId],
                          displayLabel,
                          usersKey: mKey,
                          usersMap: mMap
                      }
                  }
              }
            //   console.log('\n[Reducer Left] client/ADD_MEMBER --addMember ', action, addMember)
              return addMember
          }






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
          // console.log('\n[Reducer Left] REMOVE_CHAT ', action, removeChat)
          return removeChat

      case 'ADD_CHAT':
        if (state.chatListKey.indexOf(action.data.mesId) != -1) {
            const dontAdd = {
              ...state
            }
            // console.log('\n[Reducer Left] ADD_CHAT ---dontAdd ', action, dontAdd)
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
                  status: false,
                  display: {
                      addMember: false
                  }
                }
            },
        }
        // console.log('\n[Reducer Left] ADD_CHAT ---add ', action, addChat)
        return addChat

//------------------------------------------------------------------------------
      case 'INIT_CHAT_LIST':
          if (action.data.length <= 0) {
              return state
          }
          const initChatlist = {
            ...state,
            chatListKey: action.data.map(chat => chat.mesId),
            chatListMap: utils.chatListMap(action),
          }
        //   console.log('\n[Reducer Left] INIT_CHAT_LIST ', action, initChatlist)
          return initChatlist

//------------------------------------------------------------------------------
      case 'global/RECEIVE_MESSAGE':
          if (state.chatListKey.indexOf(action.data.mesId) == -1) {
              const newChat = {
                  ...state,
                    chatListKey: [
                        ...state.chatListKey,
                        action.data.mesId
                    ],
                    chatListMap: {
                      ...state.chatListMap,
                      [action.data.mesId]: chatMap(undefined, action)
                  }
              }
            //   console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---newChat ', action, newChat)
              return newChat
          } else {
              const updateChat = {
                ...state,
                chatListMap: {
                    ...state.chatListMap,
                    [action.data.mesId]: {
                        ...state.chatListMap[action.data.mesId],
                        lastMessage: {
                            id: action.data.user.id,
                            time: action.data.time,
                            message: action.data.message
                        }
                    }
                }
              }
            //   console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---updateChat ', action, updateChat)
              return updateChat
          }

//------------------------------------------------------------------------------
      case 'UPDATE_CHAT_USER':
          const updateChat = {
            ...state,
            chatListMap: {
              ...state.chatListMap,
              [action.data.mesId]: {
                ...state.chatListMap[action.data.mesId],
                displayLabel: action.data.username,
                usersKey: [
                  ...state.chatListMap[action.data.mesId].usersKey,
                  action.data.id
                ],
                usersMap: {
                  ...state.chatListMap[action.data.mesId].usersMap,
                  [action.data.id]: {
                    id: action.data.id,
                    avatarUrl: action.data.avatarUrl,
                    username: action.data.username
                  }
                }
              },
              test: chatMap(undefined, action)
            }
          }
        //   console.log('\n[Reducer Left] UPDATE_CHAT ', action, updateChat)
          return updateChat

        default:
          return state

    }
}

export default left
