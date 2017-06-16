const center = (state = {
  multipleChatWindow: false,
  messagesKey: [],
  messagesMap: {},

  // mesId: "",
  // messages: [],
  // user: {
  //   id: "",
  //   avatarUrl: "",
  //   username: ""
  // },
  lazyLoad: {
    offset: 0
  }
}, action) => {
    switch (action.type) {
      case 'ADD_CHAT':
        if (state.multipleChatWindow) {
          console.log('--------------------------');
          if (state.messagesKey.indexOf(action.data.mesId) != -1) {
            console.log('this mesId exited');
            return state
          }
          var tempMessagesKey = state.messagesKey
          tempMessagesKey.push(action.data.mesId)

          return {
            ...state,
            messagesKey: tempMessagesKey,
            messagesMap: {
              ...state.messagesMap,
              [action.data.mesId]: action.data.messages
            }
          }
        } else {
          return {
            ...state,
            messagesKey: [action.data.mesId],
            messagesMap: {
              [action.data.mesId]: action.data.messages
            }
          }
        }
        console.log('ADD_CHAT ', action);
        return state

      case 'MULTIPLE_CHAT':
        return {
          ...state,
          multipleChatWindow: action.data
        }
      // case 'client/INIT_MESSAGE':
      //   const { mesId, messages } = action.data
      //   const { id, avatarUrl, name } = action.data.user
      //   return {
      //     ...state,
      //     mesId,
      //     messages,
      //     user: {
      //       id,
      //       avatarUrl,
      //       username: name
      //     },
      //     lazyLoad: {
      //       offset: 0
      //     }
      //   }

        // case 'client/RECEIVE_MESSAGE':
        //     const { person, message, time } = action.data
        //     return {
        //       ...state,
        //       lazyLoad: {
        //         offset: state.lazyLoad.offset + 1},
        //         messages: [
        //           ...state.messages,
        //           buildMessage(person, message, time)
        //         ].reverse()
        //       }
        //
        // case 'LOAD_MORE_MESSAGE':
        //     return {
        //       ...state,
        //       lazyLoad: {
        //         offset: state.lazyLoad.offset + 10
        //       },
        //       messages: state.messages.reverse().concat(action.messages)
        //     }

        default:
            return state
    }
}

// const buildMessage = (id, message, time) => {
//   return JSON.stringify({
//     id,
//     message,
//     time
//   })
// }

export default center
