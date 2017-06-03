const left = (state = {
  chatList: []
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT_LIST':
            return {
              ...state,
              chatList: action.chatList
            }
        case 'client/CHAT_WAITING':
            console.log('action ',action);
            return state
        default:
            return state
    }
}

export default left
