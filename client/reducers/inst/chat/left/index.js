const left = (state = {
  chatListKey: [],
  chatListMap: {},
  unreadChat: {},
  currentChat: {
    mesId: ''
  }
}, action) => {
    switch (action.type) {

      case 'UPDATE_CHAT':

          return {
            ...state,
            chatListMap: Object.assign({}, state.chatListMap,
              Object.assign({}, state.chatListMap[action.data.mesId], {displayLabel: 'Tin nhắn mới tới '})
            )
          }

      case 'SET_CURRENT_CHAT':
          return {
            ...state,
            currentChat: {
                mesId: action.data.mesId
            }
          }

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

      case 'NEW_CHAT':
        if (state.chatListKey.indexOf(action.data.mesId) != -1) {
            return {
              ...state
            }
        }
        var tempKey = state.chatListKey
        tempKey.unshift(action.data.mesId)

        var tempMap = state.chatListMap
        tempMap[action.data.mesId] = {
            displayLabel: action.data.label,
            lastMessage: undefined,
            mesId: action.data.mesId,
            usersKey: [],
            usersMap: {},
            status: false
        }

        return {
            ...state,
            chatListKey: tempKey,
            chatListMap: tempMap,
        }

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

          return {
            ...state,
            chatListKey: tempKey,
            chatListMap: tempMap
          }

        default:
          return state

    }
}



const chatMap = (state = {
    displayLabel: '',
    lastMessage: {
        id: '',
        time: '',
        message: {
          text: '',
          type: '',
          url: ''
        }
    },
    mesId: '',
    usersKey: [],
    usersMap: {

    }
}, action) => {

}

export default left
