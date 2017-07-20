const bar = (state = {
    clicksetting: false,
    unreadChat: {
        quantity: '10',
        messages: [
            "593e4c1a2688d830be26fc00",
            "593e4c1a2688d830be26fc66"
        ]
    }
}, action) => {
    switch (action.type) {
        case 'SCREEN_CLICK':
            return {...state,
                clicksetting: false,
            }
        case 'INST_BAR_CHANGE':
            return {...state,
                [action.key] : action.value,
            }
        case 'global/UNREAD_CHATS':
            console.log('global/UNREAD_CHATS', action);
            return state
        default:
            return state
    }
}
export default bar
