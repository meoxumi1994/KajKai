const visibility = (state = {
  sendMessage: "none",
  messageList: "none",
  newChat: "none"
}, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGELIST_VISIBILITY':
            return {...state, sendMessage: getVisibility(action.display), messageList: getVisibility(action.display)}
        case 'UPDATE_CREATECHAT_VISIBILITY':
            return {...state, newChat: getVisibility(action.display)}
        default:
            return state
    }
}

export default visibility

function getVisibility(display) {
    return display? 'inline': 'none'
}
