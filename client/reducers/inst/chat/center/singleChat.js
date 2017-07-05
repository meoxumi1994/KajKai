const singleChat = (state = {
    messagesKey: [],
    messagesMap: {},
}, action) => {
    switch (action.type) {

        case 'global/RECEIVE_MESSAGE':
          console.log('global/RECEIVE_MESSAGE: ', action)
          return state

        case 'INIT_SINGLE_MESSAGES':
            return {
              ...state,
              messagesKey: [action.data.mesId],
              messagesMap: {
                  [action.data.mesId]: action.data.messages.reverse()
              }
            }

        case 'ADD_CHAT':
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
