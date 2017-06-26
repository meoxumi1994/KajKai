const display = (state = {
  visibility: {
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
      newChat: 'inline',
      setting: 'inline'
    }
  },
  themes: {
    catagory: {
      blue: {
        highlighted: {
            backgroundColor: '#65a9ed',
            color: 'white'
        },
        normal: {
            backgroundColor: 'white',
            color: 'black'
        }
      },
      red: {
        highlighted: {
            backgroundColor: '#f76565',
            color: 'white'
        },
        normal: {
            backgroundColor: '#E9EBEE',
            color: 'black'
        }
      },
    },
    currentThemes: 'blue'
  },
  isMultipleChat: true
}, action) => {
    switch (action.type) {
        case 'IS_MULTIPLE_CHAT':
          return {
            ...state,
            isMultipleChat: action.isMultipleChat
          }

        default:
            return state
    }
}

export default display

const getVisibility = (display) => {
    return display? 'inline': 'none'
}
