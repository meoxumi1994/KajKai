const modaluploadcover = (state = {
    open: false
}, action) => {
    switch (action.type) {
        case 'UPDATE_USER_SUCCESS':
        case 'PROFILE_MIDDLE_MODAL_UPLOAD_COVER_CLOSE':
            return {...state, open: false }
        case 'PROFILE_MIDDLE_MODAL_UPLOAD_COVER_OPEN':
            return {...state, open : true }
        default:
            return state
    }
}
export default modaluploadcover
