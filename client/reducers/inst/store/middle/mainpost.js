const mainpost = (state = {
    textare: '',
    canedit: false,
}, action) => {
    switch (action.type) {
        case 'STORE_MIDDLE_MAINPOST_EDIT_CLICK':
            return { ...state, canedit: true }
        case 'STORE_MIDDLE_MAINPOST_SAVE_CLICK':
            return { ...state, canedit: false }
        case 'STORE_MIDDLE_HANDLE_MAINPOST_CHANGE':
            return { ...state, ...action.value}
        default:
            return state
    }
}
export default mainpost
