const display = (state = {
  visibility: {
    left: {

    },
    top: {
        settings: false
    },
    center: {

    },
    buttom: {

    },
  },
}, action) => {
    switch (action.type) {

        case 'DISPLAY_SETTINGS':
            return {
                ...state,
                visibility: {
                    ...state.visibility,
                    top: {
                        ...state.visibility.top,
                        settings: action.data.display
                    }
                }
            }

        default:
            return state
    }
}

export default display

const getVisibility = (display) => {
    return display? 'inline': 'none'
}
