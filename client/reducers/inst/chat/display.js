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
  }

}, action) => {
    switch (action.type) {

        // case 'UPDATE_MESSAGELIST_VISIBILITY':
        //     return {
        //         ...state,
        //         buttom: {
        //           ...state.buttom,
        //           sendMessage: getVisibility(action.display)
        //         },
        //         center: {
        //           ...state.center,
        //           messageList: getVisibility(action.display)
        //         }
        //     }
        //
        // case 'UPDATE_CREATECHAT_VISIBILITY':
        //     return {
        //       ...state,
        //       top: {
        //         ...state.top,
        //         newChat: getVisibility(action.display)
        //       }
        //     }
        //
        // case 'UPDATE_UPLOADIMAGE_VISIBILITY':
        //     return {
        //       ...state,
        //       buttom: {
        //         ...state.buttom,
        //         uploadImage: action.display
        //       }
        //     }

        default:
            return state
    }
}

export default display

// const getVisibility = (display) => {
//   return display? 'inline': 'none'
// }
