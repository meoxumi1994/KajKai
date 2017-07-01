const singleChat = (state = {
    messagesKey: [],
    messagesMap: {},
    visibility: {
      top: {
        addMemberDiv: 'none'
      }
    }
}, action) => {
    switch (action.type) {

        case 'global/RECEIVE_MESSAGE':
          console.log('global/RECEIVE_MESSAGE: ', action)
          return state

        case 'ADD_MEMBER_VISIBILITY':
            return {
                ...state,
                visibility: {
                  ...state.visibility,
                  top: {
                    ...state.visibility.top,
                    addMemberDiv: action.display ==undefined?
                                  state.visibility.top.addMemberDiv == 'none'?
                                      'inline'
                                      : 'none'
                                  : action.display
                  }
                }
            }

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
