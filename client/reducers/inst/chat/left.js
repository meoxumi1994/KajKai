const left = (state = {
  chatListKey: [],
  chatListMap: {},
  unreadChat: {},
  lazyload: {
    offset: ''
  }
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

        // case 'client/CHAT_WAITING':
        //     console.log('CHAT_WAITING', action);
        //     return state

        // case 'LOAD_CHAT_LIST':
        //     return {
        //       ...state,
        //       chatList: action.chatList,
        //       currentChat: action.chatList[0].id
        //     }
        //
        // case 'SELECT_TAB':
        //     return {
        //       ...state,
        //       currentChat: action.tabId
        //     }
        //
        // case 'client/CHAT_WAITING':
        //     var contained = isContainedInChatList(state.chatList, action.data.lastMessage.person, action.data.id)
        //     if (!contained) {
        //         return addNewChat(state, action)
        //     } else {
        //         return updateLastMessage(state, action)
        //     }

        default:
            return state

      case 'global/UNREAD_CHAT':
        return {
          ...state,
          unreadChat: action.data
        }
    }
}

// const addNewChat = (state, action) => {
//   const { mesId, person, message, time } = action.data.lastMessage
//   const {avatarUrl, id, username} = action.data
//   return {
//     ...state,
//     chatList: [
//       ...state.chatList,
//       {
//         avatarUrl,
//         id,
//         username,
//         mesId,
//         lastMessage: buildLastMessage(person, message, time)
//       }
//     ]
//   }
// }
//
// const updateLastMessage = (state, action) => {
//   const { mesId, person, message, time } = action.data.lastMessage
//   return {
//     ...state,
//     chatList: state.chatList.map(
//       chat => chat.mesId === mesId ?
//           {
//            ...chat,
//            lastMessage: buildLastMessage(person, message, time)
//          }
//        :
//          {
//            ...chat
//          }
//     )
//   }
// }
//
// const isContainedInChatList = (chatList, personId, id) => {
//   if (personId === id) {
//     return true
//   }
//   for (var i=0; i< chatList.length; i++) {
//     if (chatList[i].id == personId) {
//       return true
//     }
//   }
//   return false
// }
//
// const buildLastMessage = (person, message, time) => {
//   return JSON.stringify(
//     {
//       id: person,
//       message: message,
//       time: time
//     }
//   )
// }

export default left
