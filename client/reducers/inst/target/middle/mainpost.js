const mainpost = (state = {
    list: []
}, action) => {
    switch (action.type) {
        case 'TARGET_MIDDLE_MAINPOST_EDIT':
            return { ...state, list: action.list }
        case 'TARGET_MIDDLE_MAINPOST_ADD':
            return { ...state, list: [...state.list, {
                type: action.rowtype,
                text: '',
                images: [],
            }]}
        default:
            return state
    }
}
export default mainpost
