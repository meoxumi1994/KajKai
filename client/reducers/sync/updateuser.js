const updateuser = ( state = 'WAIT' , action) => {
    switch (action.type) {
        case 'UPDATE_PHONE_ING':
        case 'UPDATE_PHONE_USED':
        case 'UPDATE_PHONE_FAILED':
        case 'UPDATE_PHONE_PENDING':
        case 'VERIFY_PHONE_ING':
        case 'VERIFY_PHONE_FAILED':
        case 'VERIFY_PHONE_SUCCESS':
        case 'UPDATE_USER_ING':
        case 'UPDATE_USER_FAILED':
        case 'UPDATE_USER_SUCCESS':
            return action.type
        default:
            return state
    }
}

export default updateuser
