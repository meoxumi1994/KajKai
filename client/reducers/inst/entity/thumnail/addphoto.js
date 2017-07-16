const addphoto = (state = {
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_THUMNAIL_ADDPHOTO_CHANGE':
            return {...state,
                [action.key]: action.value
            }
        case 'UPDATE_STORE_SUCCESS':
        case 'UPDATE_USER_SUCCESS':
            return {}
        default:
            return state
    }
}
export default addphoto
