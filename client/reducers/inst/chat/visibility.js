const visibility = (state = {
  left: {

  },
  center: {
    messageList: 'none',
  },
  buttom: {
    sendMessage: 'none',
    uploadImage: false
  },
  top: {
    newChat: 'none'
  }
}, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGELIST_VISIBILITY':
            return {
                ...state,
                buttom: {
                  ...state.buttom,
                  sendMessage: getVisibility(action.display)
                },
                center: {
                  ...state.center,
                  messageList: getVisibility(action.display)
                }
            }

        case 'UPDATE_CREATECHAT_VISIBILITY':
            return {
              ...state,
              top: {
                ...state.top,
                newChat: getVisibility(action.display)
              }
            }

        case 'UPDATE_UPLOADIMAGE_VISIBILITY':
            return {
              ...state,
              buttom: {
                ...state.buttom,
                uploadImage: action.display
              }
            }

        default:
            return state
    }
}

export default visibility

function getVisibility(display) {
    return display? 'inline': 'none'
}
