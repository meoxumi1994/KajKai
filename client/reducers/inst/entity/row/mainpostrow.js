const item = (state = {}, action) => {
    switch (action.type) {
        case 'ENTITY_ROW_MAINPOSTROW_CREATE':
            return action.data
        default:
            return state
    }
}

const mainpostrow = (state = { default: {
    type: '',
    text: '',
    images: [],
} }, action) => {
    switch (action.type) {
        case 'ENTITY_ROW_MAINPOSTROW_CREATE':
            return {...state, [action.data.id] : item(state[action.data.id], action) }
        default:
            return state
    }
}

export default mainpostrow
