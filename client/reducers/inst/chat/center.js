const center = (state = {
  currentChat: {},
  chatLog: []
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT':
            return {...state, chatLog: action.messages, currentChat: action.chat}
        case 'client/RECEIVE_MESSAGE':
            var newMessage = {
              id: action.data.person,
              message: action.data.message,
              time: action.data.time
            }
            return {...state, chatLog: [...state.chatLog, JSON.stringify(newMessage)].reverse()}
        default:
            return state
    }
}

export default center
