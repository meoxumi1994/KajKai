const center = (state = {
  currentChat: {},
  chatLog: [],
  lazyLoad: {
    offset: 0,
    length: 20
  }
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT':
            return {...state, chatLog: action.messages, currentChat: action.chat}
        case 'LOAD_MORE_CHAT':
            console.log('LOAD_MORE_CHAT ',action.messages);
            return state
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
