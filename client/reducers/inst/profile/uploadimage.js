const modaluploadavatar = (state = {
    open: false
}, action) => {
    switch (action.type) {
        case 'UPDATE_USER_SUCCESS':
        case 'ENTITY_MODAL_UPLOAD_IMAGE_CLOSE':
            return {...state, open: false }
        case 'ENTITY_MODAL_UPLOAD_IMAGE_OPEN':
            return {...state, open : true }
        default:
            return state
    }
}

export default modaluploadavatar
