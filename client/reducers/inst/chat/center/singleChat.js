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

        case 'NEW_CHAT':
            return {
              ...state,
              messagesKey: ['0'],
              messagesMap: {
                mesId: '0',
                messages: []
              }
            }

        default:
          return state
    }
}

export default singleChat
