const modaluploadavatar = (state = {
    open: false
}, action) => {
    switch (action.type) {
        case 'UPDATE_USER_SUCCESS':
        case 'PROFILE_MIDDLE_MODAL_UPLOAD_AVATAR_CLOSE':
            return {...state, open: false }
        case 'PROFILE_MIDDLE_MODAL_UPLOAD_AVATAR_OPEN':
            return {...state, open : true }
        default:
            return state
    }
}
export default modaluploadavatar
