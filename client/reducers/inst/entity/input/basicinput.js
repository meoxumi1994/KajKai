const basicinput = (state = {
    textare: '',
    opensupplement: false,
}, action) => {
    switch (action.type) {
        case 'ENTITY_INPUT_BASICINPUT_HANDLE_CHANGE':
            return {...state, textare: action.textare }
        case 'ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT':
            return { ...state, opensupplement: true }
        case 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT':
            return { ...state, opensupplement: false }
        default:
            return state
    }
}

export default basicinput
