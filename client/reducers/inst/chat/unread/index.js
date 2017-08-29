const unread = (state= {
    quantity: 0,
    messages: [],
    currentChat: ''
}, action) => {
    switch (action.type) {

        case 'global/UNREAD_CHATS':
            const unreadChats = {
                ...state,
                quantity: action.data.quantity,
                messages: action.data.messages
            }
            console.log('global/UNREAD_CHATS', action, unreadChats)
            return unreadChats

        case 'client/RESET_UNREAD_CHATS_QUANTITY':
            return {
              ...state,
              quantity: 0
            }

        case 'client/READ_CHAT':
            const mes = state.messages
            const readChat = {
                ...state,
                quantity: state.messages.indexOf(action.data[0]) == -1? state.quantity: state.quantity - 1,
            }
            state.messages.splice(state.messages.indexOf(action.data[0]), 1)
            console.log('client/READ_CHAT', action, readChat)
            return readChat

        case 'global/RECEIVE_MESSAGE':
            if (action.data.mesId == state.currentChat) {
                return state
            }
            const receiveMessage = {
                ...state,
                quantity: state.messages.indexOf(action.data.mesId) != -1? state.quantity: state.quantity +1,
                messages: [
                    ...state.messages,
                    action.data.mesId
                ]
            }
            console.log('global/RECEIVE_MESSAGE', action, receiveMessage)
            return receiveMessage

        case 'CURRENT_CHAT':
            switch (action.subType) {
                case 'SET_CURRENT_CHAT':
                    const setCurrentChat = {
                      ...state,
                      currentChat: action.data.mesId
                    }
                    return setCurrentChat
              default:
                  return state
            }

        default:
            return state
    }
}

export default unread
