const item = (state = {
    content: '',
    opensupplement: false,
}, action) => {
    switch (action.type) {
        case 'ENTITY_INPUT_BASICINPUT_HANDLE_CHANGE':
            return {...state, content: action.content }
        case 'ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT':
            return { ...state, opensupplement: true }
        case 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT':
            return { ...state, opensupplement: false }
        default:
            return state
    }
}

const basicinput = (state = { default: {
    content: '',
    opensupplement: false,
}}, action) => {
    switch (action.type) {
        case 'TARGET_MIDDLE_POST_ADD':
            return {...state, [action.rowid]: {...state.default}}
        case 'client/STORE_POST':
            action.data.list.map((row) => {
                state = {...state, [row.id]: {...state[row.id], content: row.content }}
            })
            return state
        case 'ENTITY_INPUT_BASICINPUT_HANDLE_CHANGE':
        case 'ENTITY_INPUT_BASICINPUT_OPEN_SUPPLEMENT':
        case 'ENTITY_INPUT_BASICINPUT_CLOSE_SUPPLEMENT':
            return {...state, [action.id] : item(state[action.id], action)}
        default:
            return state
    }
}

export default basicinput
