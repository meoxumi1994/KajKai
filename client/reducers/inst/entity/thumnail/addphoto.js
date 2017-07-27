const addphoto = (state = {
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_THUMNAIL_ADDPHOTO_CHANGE':
            return {...state,
                [action.key]: action.value
            }
        case 'LOAD_IMAGE_SUCCESS':
            return {}
        default:
            return state
    }
}
export default addphoto
