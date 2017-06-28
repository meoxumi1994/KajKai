const left = (state = {
  chatListKey: [],
  chatListMap: {},
  unreadChat: {},
}, action) => {
    switch (action.type) {

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
                usersMap: tempUserMap
              }
            }
          )
          return {
            ...state,
            chatListKey: tempKey,
            chatListMap: tempMap
          }

        case 'READ_CHAT':
          if (state.unreadChat.indexOf(action.mesId) == -1) {
            return state
          }
          const temp = state.unreadChat
          temp.splice(temp.indexOf(action.mesId), 1)
          return {
            ...state,
            unreadChat: temp
          }
        default:
            return state

      case 'global/UNREAD_CHAT':
        return {
          ...state,
          unreadChat: action.data
        }

      case 'ADD_NEW_CHAT':
          return {
              ...state,
              chatListKey: Object.assign(state.chatListKey).push(undefined)
          }
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
