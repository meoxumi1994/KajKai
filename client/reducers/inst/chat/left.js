const left = (state = {
  chatListKey: [
    '593bc3ff0607380b9934204e',
    '593e4c1a2688d830be26fc66',
    '593e4c1a2688d830be26fc00'
  ],
  chatListMap: {
    '593e4c1a2688d830be26fc00': {
      lastMessage: {
        id: "593ea5bf0d346a0b68a88a74",
        time: 1497089078194,
        message: {
          text: "hello",
          type: "msg",
          url: ""
        }
      },
      mesId: "593e4c1a2688d830be26fc00",
      displayName: "",
      time: 1497089023326,
      usersKey: [
        '59302a009afeed1a7f37cac0',
        '593ea5bf0d346a0b68a88a74',
        '593234a11c75513e381e5c87'
      ],
      usersMap: {
        '593234a11c75513e381e5c87': {
          avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg",
          id: "593234a11c75513e381e5c87",
          name: "Long FU"
        },
        '59302a009afeed1a7f37cac0': {
          avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/0cac73f7a1deefa900a203950924437e54fa5358be8c3d6b863b971a.jpg",
          id: "59302a009afeed1a7f37cac0",
          name: "Long Gmail"
        },
        '593ea5bf0d346a0b68a88a74': {
          avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
          id: "593ea5bf0d346a0b68a88a74",
          name: "Long Ly"
        }
      }
    },
    '593bc3ff0607380b9934204e': {
      lastMessage: {
        id: "59302a009afeed1a7f37cac0",
        time: 1497089078194,
        message: {
          text: "hello",
          type: "msg",
          url: ""
        }
      },
      mesId: "593bc3ff0607380b9934204e",
      displayName: "",
      time: 1497089023326,
      usersKey: [
        '59302a009afeed1a7f37cac0',
        '593ea5bf0d346a0b68a88a74'
      ],
      usersMap: {
        '59302a009afeed1a7f37cac0': {
          avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/0cac73f7a1deefa900a203950924437e54fa5358be8c3d6b863b971a.jpg",
          id: "59302a009afeed1a7f37cac0",
          name: "Long Gmail"
        },
        '593ea5bf0d346a0b68a88a74': {
          avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
          id: "593ea5bf0d346a0b68a88a74",
          name: "Long Ly"
        }
      }
    },
    '593e4c1a2688d830be26fc66': {
      lastMessage: {
        id: "593234a11c75513e381e5c87",
        time: 1497089078194,
        message: {
          text: "fuck u",
          type: "msg",
          url: ""
        }
      },
      mesId: "593e4c1a2688d830be26fc66",
      displayName: "",
      time: 1497089023326,
      usersKey: [
        '593234a11c75513e381e5c87',
        '593ea5bf0d346a0b68a88a74'
      ],
      usersMap: {
        '593234a11c75513e381e5c87': {
          avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg",
          id: "593234a11c75513e381e5c87",
          name: "Long FU"
        },
        '593ea5bf0d346a0b68a88a74': {
          avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
          id: "593ea5bf0d346a0b68a88a74",
          name: "Long Ly"
        }
      }
    }
  },
  unreadChat: [
    '593e4c1a2688d830be26fc66',
    '593e4c1a2688d830be26fc00'
  ],
  // chatListMap: {},
  // chatListKey: [],
  // unreadChat: [],
  lazyLoad: {
    offset: 0,
    length: 10
  }
}, action) => {
    switch (action.type) {
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


        // case 'client/INIT_CHAT_LIST':
        //     if (action.data.length <= 0) {
        //       return state
        //     }
        //
        //     const tempMap = {}
        //     const tempKey = []
        //
        //     action.data.map(
        //       chat => {
        //         tempMap[chat.mesId] = chat
        //         var key = {mesId: chat.mesId, userKey: []}
        //         const tempUsers = {}
        //         chat.users.map(
        //           user => {
        //             tempUsers[user.id] = user
        //             key.userKey.push(user.id)
        //           }
        //         )
        //         tempKey.push(key)
        //         tempMap[chat.mesId].users = tempUsers
        //       }
        //     )
        //
        //     return {
        //       ...state,
        //       chatListMap: tempMap,
        //       chatListKey: tempKey
        //     }

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
