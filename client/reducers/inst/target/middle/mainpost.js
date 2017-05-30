const mainpost = (state = {
    onedit: false,
    list: []
}, action) => {
    switch (action.type) {
        case 'client/STOREMAINPOST':
            const newlist = action.data.list.map((item) => ({ id: item.id}))
            return { ...state, list: newlist }
        case 'TARGET_MIDDLE_MAINPOST_ADD':
            return { ...state, list: [...state.list, { id: action.rowid}] }
        case 'TARGET_MIDDLE_MAINPOST_ON_EDIT':
            return {...state, onedit: true }
        case 'TARGET_MIDDLE_MAINPOST_ON_SAVE':
            return {...state, onedit: false }
        default:
            return state
    }
}
export default mainpost
