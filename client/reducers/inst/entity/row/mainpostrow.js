const item = (state = {}, action) => {
    switch (action.type) {
        case 'TARGET_MIDDLE_MAINPOST_ADD':
            return {...state, type: action.rowtype}
        default:
            return state
    }
}

const mainpostrow = (state = {default: {
    type: '',
}}, action) => {
    switch (action.type) {
        case 'client/STOREMAINPOST':
            action.data.list.map((row) => {
                state = {...state, [row.id]: {...state[row.id], type: row.type }}
            })
            return state
        case 'TARGET_MIDDLE_MAINPOST_ADD':
            return {...state, [action.rowid] : item(state[action.rowid], action) }
        default:
            return state
    }
}

export default mainpostrow
