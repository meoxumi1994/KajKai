const mainpost = (state = {
    onedit: false,
    list: []
}, action) => {
    switch (action.type) {
        case 'TARGET_MIDDLE_MAINPOST_EDIT_ROW':
            state.list[action.data.id] = {...state.list[action.data.id], ...action.data}
            return state
        case 'TARGET_MIDDLE_MAINPOST_ADD':
            return { ...state, list: [...state.list, {
                type: action.rowtype,
                text: '',
                images: [],
            }]}
        case 'TARGET_MIDDLE_MAINPOST_ON_EDIT':
            return {...state, onedit: true }
        case 'TARGET_MIDDLE_MAINPOST_ON_SAVE':
            return {...state, onedit: false }
        default:
            return state
    }
}
export default mainpost
