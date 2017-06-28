const multiChat = (state = {
    messagesKey: [],
    messagesMap: {},
}, action) => {
    switch (action.type) {
        case 'ADD_MULTI_CHAT':
            if (state.messagesKey.indexOf(action.data.mesId) != -1) {
              return {
                ...state,
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
            }

        case 'REMOVE_MULTI_CHAT':
          const tempKey = state.messagesKey
          tempKey.splice(tempKey.indexOf(action.mesId), 1)
          const tempMap = state.messagesMap
          delete tempMap[action.mesId]
          return {
            ...state,
            messagesKey: tempKey,
            messagesMap: tempMap,
          }
        default:
          return state
    }
}

export default multiChat
