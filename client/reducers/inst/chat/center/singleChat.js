const singleChat = (state = {
    messagesKey: [],
    messagesMap: {},
}, action) => {
    switch (action.type) {

        case 'global/RECEIVE_MESSAGE':
          const { mesId, senderId, time, message } = action.data
          const chat = state.messagesMap[mesId]
          if (chat == undefined || chat == null) {
            return state
          }
          console.log('message ', message);
          return {
            ...state,
            messagesMap: {
              ...state.messagesMap,
              [mesId]: [
                  ...state.messagesMap[mesId],
                  {
                      id: senderId,
                      message,
                      time
                  }
              ]
            }
          }

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
