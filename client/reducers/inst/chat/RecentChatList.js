const RecentChatList = (state = {
    chatList: [],
    currentChat: '',
    currentChatLog: []
}, action) => {

    switch (action.type) {
        case 'LOAD_CHAT_LIST':
            return {...state, chatList: action.response.chatList, currentChat: action.response.chatList[0]}
        case 'LOAD_CHAT':        
            return {...state, currentChatLog: action.messages}
        default:
            return state
    }
}

export default RecentChatList
