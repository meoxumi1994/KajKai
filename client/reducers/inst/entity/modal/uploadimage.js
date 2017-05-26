const modaluploadavatar = (state = {
    open: false,
    typeUrl: undefined,
}, action) => {
    switch (action.type) {
        case 'UPDATE_USER_SUCCESS':
        case 'ENTITY_MODAL_UPLOAD_IMAGE_CLOSE':
            return { open: false }
        case 'ENTITY_MODAL_UPLOAD_IMAGE_OPEN':
            console.log('ENTITY_MODAL_UPLOAD_IMAGE_OPEN',action.typeUrl)
            return { open : true, typeUrl: action.typeUrl }
        default:
            return state
    }
}

export default modaluploadavatar
