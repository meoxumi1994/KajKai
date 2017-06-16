const left = (state = {
  // chatListMap: {
  //   '593bc3ff0607380b9934204e': {
  //     lastMessage: {
  //       id: "59302a009afeed1a7f37cac0",
  //       time: 1497089078194,
  //       message: {
  //         text: "hello",
  //         type: "msg",
  //         url: ""
  //       }
  //     },
  //     mesId: "593bc3ff0607380b9934204e",
  //     time: 1497089023326,
  //     users: {
  //       '59302a009afeed1a7f37cac0': {
  //         avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/0cac73f7a1deefa900a203950924437e54fa5358be8c3d6b863b971a.jpg",
  //         id: "59302a009afeed1a7f37cac0",
  //         name: "Long Gmail"
  //       },
  //       '59302b189afeed1a7f37cac1': {
  //         avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18446494_1928353954110436_4927307716927402392_n.jpg?oh=f6d6c0088c46c7ea8428562e7e6a92e3&oe=59E87190",
  //         id: "59302b189afeed1a7f37cac1",
  //         name: "Long Ly"
  //       }
  //     }
  //   },
  //   '593e4c1a2688d830be26fc66': {
  //     lastMessage: {
  //       id: "593234a11c75513e381e5c87",
  //       time: 1497089078194,
  //       message: {
  //         text: "fuck u",
  //         type: "msg",
  //         url: ""
  //       }
  //     },
  //     mesId: "593e4c1a2688d830be26fc66",
  //     time: 1497089023326,
  //     users: {
  //       '593234a11c75513e381e5c87': {
  //         avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg",
  //         id: "593234a11c75513e381e5c87",
  //         name: "Long FU"
  //       },
  //       '59302b189afeed1a7f37cac1': {
  //         avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18446494_1928353954110436_4927307716927402392_n.jpg?oh=f6d6c0088c46c7ea8428562e7e6a92e3&oe=59E87190",
  //         id: "59302b189afeed1a7f37cac1",
  //         name: "Long Ly"
  //       }
  //     }
  //   }
  // },
  // chatListKey: [
  //   {
  //     chatKey: '593bc3ff0607380b9934204e',
  //     userKey: [
  //       '59302a009afeed1a7f37cac0',
  //       '59302b189afeed1a7f37cac1'
  //     ]
  //   },
  //   {
  //     chatKey: '593e4c1a2688d830be26fc66',
  //     userKey: [
  //       '593234a11c75513e381e5c87',
  //       '59302b189afeed1a7f37cac1'
  //     ]
  //   }
  // ],
  chatListMap: {},
  chatListKey: [],
  lazyLoad: {
    offset: 0,
    length: 10
  }
}, action) => {
    switch (action.type) {
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
        //         var key = {chatKey: chat.mesId, userKey: []}
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
