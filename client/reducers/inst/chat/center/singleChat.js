const singleChat = (state = {
    messagesKey: [],
    messagesMap: {},
}, action) => {
    switch (action.type) {
        case 'ADD_SINGLE_CHAT':
            return {
              ...state,
              messagesKey: [action.data.mesId],
              messagesMap: {
                [action.data.mesId]: action.data.messages
              }
            }
        default:
          return state
    }
}

export default singleChat
