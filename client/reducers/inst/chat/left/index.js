import utils from './utils'
import chatMap from './chatMap'

const left = (state = {
  chatListKey: [],
  chatListMap: {},
  currentChat: {
    mesId: '',
    id: ''
  },
}, action) => {
    switch (action.type) {

      case 'global/UNREAD_CHATS':
        //   console.log('---global/UNREAD_CHATS', action);
          return state

/**
 ** INITIAL
**/
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
          console.log('\n[Reducer Left] INIT_CHAT_LIST ', action, initChatlist)
          return initChatlist


/**
 ** CHAT ELEMENT
**/
//------------------------------------------------------------------------------
      case 'CLOSE_CHAT':
          const closeChat = {
              ...state,
              currentChat: {
                  ...state.currentChat,
                  mesId: action.data.newMesId
              }
          }
          console.log('\n[Reducer Left] CLOSE_CHAT', action, closeChat)
//------------------------------------------------------------------------------
      case 'NEW_CHAT':
        if (state.chatListKey.indexOf(action.data.mesId) != -1) {
            const dontAdd = {
              ...state,
              currentChat: {
                ...state.currentChat,
                mesId: action.data.mesId
              }
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
                [action.data.mesId]: chatMap(undefined, action)
            },
            currentChat: {
              ...state.currentChat,
              mesId: action.data.mesId
            }
        }
        console.log('\n[Reducer Left] ADD_CHAT ---add ', action, addChat)
        return addChat

//------------------------------------------------------------------------------
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

/**
 ** CURRENT_CHAT
**/
//------------------------------------------------------------------------------
      case 'CURRENT_CHAT':
          switch (action.subType) {
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
            default:
                return state
          }

/**
 ** SEARCH
**/
//------------------------------------------------------------------------------
      case 'SEARCH':
          console.log('action',action);
          return {
              ...state,
              chatListMap: {
                  ...state.chatListMap,
                  [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
              }
          }

/**
 ** SOCKET.IO
**/
//------------------------------------------------------------------------------
      case 'client/REMOVE_MEMBER':
          if (action.data.memberId == state.currentChat.id) {
              const disabledChat = {
                  ...state,
                  chatListMap: {
                      ...state.chatListMap,
                      [action.data.mesId]: {
                          ...state.chatListMap[action.data.mesId],
                          disabled: true
                      }
                  }
              }
              console.log('\n[Reducer Left] client/REMOVE_MEMBER disable chat', action, disabledChat)
          }
          const removeMember = {
              ...state,
              chatListMap: {
                  ...state.chatListMap,
                  [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
              }
          }
          console.log('\n[Reducer Left] client/REMOVE_MEMBER remove', action, removeMember)
          return removeMember

//------------------------------------------------------------------------------
      case 'client/ADD_MEMBER':
          if (state.chatListKey.indexOf(action.data.mesId) == -1) {
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
                      [action.data.mesId]: chatMap(undefined, action, {type: 'NEW_GROUP', data: {id: state.currentChat.id}})
                  },
              }
              console.log('\n[Reducer Left] client/ADD_MEMBER --NEW_GROUP ', action, newChat)
              return newChat
          } else {
              const addMember = {
                  ...state,
                  chatListMap: {
                      ...state.chatListMap,
                      [action.data.mesId]: {
                          ...state.chatListMap[action.data.mesId],
                          usersKey: utils.groupUsersKey(action, action.data.members, state.currentChat.id),
                          usersMap: utils.groupUsersMap(action, action.data.members, state.currentChat.id)
                      }
                  }
              }
              console.log('\n[Reducer Left] client/ADD_MEMBER --UPDATE_GROUP ', action, addMember)
              return addMember
          }

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
                console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---newChat ', action, newChat)
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
                console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---updateChat ', action, updateChat)
                return updateChat
            }

      case 'client/UPDATE_UI':
          console.log('client/UPDATE_UI', action);
          return state

/**
 ** USER UPDATE
**/
//------------------------------------------------------------------------------
      case 'UPDATE_USER_INFO':
          if (state.chatListMap[action.data.mesId].usersKey.indexOf(action.data.id) != -1) {
              return state
          }
          const updateChat = {
            ...state,
            chatListMap: {
              ...state.chatListMap,
              [action.data.mesId]: {
                ...state.chatListMap[action.data.mesId],
                usersKey: [
                  ...state.chatListMap[action.data.mesId].usersKey,
                  action.data.id
                ],
                usersMap: {
                  ...state.chatListMap[action.data.mesId].usersMap,
                  [action.data.id]: {
                      ...state.chatListMap[action.data.mesId].usersMap[action.data.id],
                      id: action.data.id,
                      avatarUrl: action.data.avatarUrl,
                      username: action.data.username
                  }
                }
              }
            }
          }
          console.log('\n[Reducer Left] UPDATE_USER_INFO ', action, updateChat)
          return updateChat

//------------------------------------------------------------------------------
      case 'CHANGE_DISPLAY':
          return {
            ...state,
            chatListMap: {
                ...state.chatListMap,
                [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
            }
          }

        default:
          return state

    }
}

export default left
