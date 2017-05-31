const left = (state = {
  chatList: []
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT_LIST':
            return {
              ...state,
              chatList: action.chatList
            }
        default:
            return state
    }
}

export default left
