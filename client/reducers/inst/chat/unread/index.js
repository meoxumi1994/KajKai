const unread = (state= {
    quantity: 0,
    messages: [],
    currentChat: ''
}, action) => {
    switch (action.type) {

        case 'global/UNREAD_CHATS':
            return {
                ...state,
                quantity: action.data.quantity,
                messages: action.data.messages
            }

        case 'client/RESET_UNREAD_CHATS_QUANTITY':
            return {
              ...state,
              quantity: 0
            }

        case 'client/READ_CHAT':
            const mes = state.messages
            mes.splice(mes.indexOf(action.data[0]), 1)
            return {
                ...state,
                quantity: state.messages.indexOf(action.data[0]) == -1? state.quantity: state.quantity - 1,
                messages: mes
            }

        case 'global/RECEIVE_MESSAGE':
            if (action.data.mesId == state.currentChat) {
                return state
            }
            return {
                ...state,
                quantity: state.messages.indexOf(action.data.mesId) != -1? state.quantity: state.quantity +1,
                messages: [
                    ...state.messages,
                    action.data.mesId
                ]
            }

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
