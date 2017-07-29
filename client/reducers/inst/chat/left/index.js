import utils from './utils'
import chatMap from './chatMap'

const left = (state = {
  chatListKey: [],
  chatListMap: {},
  currentChat: {
    mesId: '',
    id: ''
  },
  lazyLoad: {
      offset: '',
      loadMore: true
  }
}, action) => {
    switch (action.type) {

      case 'DISPLAY_CHAT_LAZYLOAD':
          return {
              ...state,
              lazyLoad: {
                  ...state.lazyLoad,
                  loadMore: false
              }
          }

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
              chatListKey: [
                  ...state.chatListKey,
                  ...[...new Set(action.data.map(chat => chat.mesId))]
              ],
              chatListMap: {
                  ...state.chatListMap,
                  ...utils.chatListMap(action)
              },
              lazyLoad: {
                  ...state.lazyLoad,
                  offset: action.lazyLoad.offset
              }
          }
          //console.log('\n[Reducer Left] INIT_CHAT_LIST ', action, initChatlist)
          return initChatlist


/**
 ** CHAT ELEMENT
**/
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
            //console.log('\n[Reducer Left] ADD_CHAT ---dontAdd ', action, dontAdd)
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
        //console.log('\n[Reducer Left] ADD_CHAT ---add ', action, addChat)
        return addChat

//------------------------------------------------------------------------------
      case 'REMOVE_CHAT':
          var tempKey = state.chatListKey
          var tempMap = state.chatListMap
          tempKey.splice(action.data.mesId, 1)
          delete tempMap[action.data.mesId]
          return {
              ...state,
              chatListKey: tempKey,
              chatListMap: tempMap
          }

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
                //console.log('\n[Reducer Left] SET_USER_ID', action, setUserId)
                return setUserId
            case 'SET_CURRENT_CHAT':
                const setCurrentChat = {
                  ...state,
                  currentChat: {
                      ...state.currentChat,
                      mesId: action.data.mesId
                  }
                }
                //console.log('\n[Reducer Left] SET_CURRENT_CHAT', action, setCurrentChat)
                return setCurrentChat
            default:
                return state
          }

/**
 ** SEARCH
**/
//------------------------------------------------------------------------------
      case 'SEARCH':
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
      case 'client/ADD_MEMBER':
          if (state.chatListKey.indexOf(action.data.mesId) == -1) {
              const newChat = {
                  ...state,
                  currentChat: {
                      ...state.currentChat,
                      mesId: action.data.mesId
                  },
                  chatListKey: [
                      action.data.mesId,
                      ...state.chatListKey,
                  ],
                  chatListMap: {
                      ...state.chatListMap,
                      [action.data.mesId]: chatMap(undefined, action, {type: 'NEW_GROUP', data: {id: state.currentChat.id}})
                  },
              }
              // console.log('\n[Reducer Left] client/ADD_MEMBER --NEW_GROUP ', action, newChat)
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
              //console.log('\n[Reducer Left] client/ADD_MEMBER --UPDATE_GROUP ', action, addMember)
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
                //console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---newChat ', action, newChat)
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
                //console.log('\n[Reducer Left] global/RECEIVE_MESSAGE ---updateChat ', action, updateChat)
                return updateChat
            }

/**
 ** USER UPDATE
**/
//------------------------------------------------------------------------------
      case 'UPDATE_USER_INFO':
          if (state.chatListMap[action.data.mesId] == undefined || state.chatListMap[action.data.mesId].usersKey.indexOf(action.data.id) != -1) {
              return state
          }
          return {
              ...state,
              chatListMap: {
                  ...state.chatListMap,
                  [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
              }
          }

//------------------------------------------------------------------------------
      case 'CHANGE_DISPLAY':
          return {
            ...state,
            chatListMap: {
                ...state.chatListMap,
                [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
            }
          }
//------------------------------------------------------------------------------
      case 'CHAT/UPDATE':
          return {
              ...state,
              chatListMap: {
                  ...state.chatListMap,
                  [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
              }
          }

//------------------------------------------------------------------------------
      case 'client/UPDATE_UI':
          return {
              ...state,
              chatListMap: {
                  ...state.chatListMap,
                  [action.data.mesId]: chatMap(state.chatListMap[action.data.mesId], action)
              }
          }
//------------------------------------------------------------------------------
        default:
          return state

    }
}

export default left
