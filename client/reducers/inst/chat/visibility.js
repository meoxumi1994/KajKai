const visibility = (state = {
  left: {

  },
  center: {
    messageList: 'inline',
  },
  buttom: {
    sendMessage: 'inline',
    uploadImage: false
  },
  top: {
    newChat: 'inline'
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

const getVisibility = (display) => {
  return display? 'inline': 'none'
}
