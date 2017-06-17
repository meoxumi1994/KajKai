const center = (state = {
  messagesKey: [],
  messagesMap: {},
  currentChat: '',
  multipleChatWindow: false,
  lazyLoad: {
    offset: 0
  }
}, action) => {
    switch (action.type) {

      case 'SET_CURRENT_CHAT':
        return {
          ...state,
          currentChat: action.mesId
        }

      case 'ADD_CHAT':
          if (state.messagesKey.indexOf(action.data.mesId) != -1) {
            return {
              ...state,
              currentChat: action.data.mesId
            }
          }
          var tempMessagesKey = state.messagesKey
          tempMessagesKey.push(action.data.mesId)

          return {
            ...state,
            messagesKey: tempMessagesKey,
            messagesMap: {
              ...state.messagesMap,
              [action.data.mesId]: action.data.messages
            },
            currentChat: action.data.mesId
          }
        return state

      case 'REMOVE_CHAT':
        const tempKey = state.messagesKey
        tempKey.splice(tempKey.indexOf(action.mesId), 1)
        const tempMap = state.messagesMap
        delete tempMap[action.mesId]

        return {
          ...state,
          messagesKey: tempKey,
          messagesMap: tempMap
        }


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
