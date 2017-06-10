const left = (state = {
  chatListMap: {},
  chatListKey: [],
  lazyLoad: {
    offset: 0,
    length: 10
  }
}, action) => {
    switch (action.type) {
        case 'client/INIT_CHAT_LIST':
            if (action.data.length <= 0) {
              return state
            }

            const tempMap = {}
            const tempKey = []

            action.data.map(
              chat => {
                tempMap[chat.mesId] = chat
                var key = {chatKey: chat.mesId, userKey: []}
                const tempUsers = {}
                chat.users.map(
                  user => {
                    tempUsers[user.id] = user
                    key.userKey.push(user.id)
                  }
                )
                tempKey.push(key)
                tempMap[chat.mesId].users = tempUsers
              }
            )

            return {
              ...state,
              chatListMap: tempMap,
              chatListKey: tempKey
            }

        case 'client/CHAT_WAITING':
            console.log('CHAT_WAITING', action);
            return state

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
    }
}

// const addNewChat = (state, action) => {
//   const { mesId, person, message, time } = action.data.lastMessage
//   const {avatarUrl, id, name} = action.data
//   return {
//     ...state,
//     chatList: [
//       ...state.chatList,
//       {
//         avatarUrl,
//         id,
//         name,
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
