const left = (state = {
  chatList: [],
  lazyLoad: {
    offset: 0,
    length: 10
  }
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT_LIST':
            console.log(action);
            return {
              ...state,
              chatList: action.chatList,
            }

        case 'client/CHAT_WAITING':
            console.log('action ',action);
            return state

        default:
            return state
    }
}

export default left
