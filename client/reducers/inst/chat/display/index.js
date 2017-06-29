const display = (state = {
  visibility: {
    left: {

    },
    top: {

    },
    center: {
        displayLabel: 'inline',
        toLabel: 'none'
    },
    buttom: {

    },
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
            backgroundColor: '#cc3333',
            color: 'white'
        },
        normal: {
            backgroundColor: 'white',
            color: 'black'
        }
      },
    },
    currentThemes: 'red'
  },
  isMultipleChat: true
}, action) => {
    switch (action.type) {

        // case 'DISPLAY_TO_LABEL':
        //   return {
        //
        //   }

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
