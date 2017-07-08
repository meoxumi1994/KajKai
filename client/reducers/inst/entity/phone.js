const phone = (state = 'WAIT', action) => {
    switch (action.type) {
        case 'UPDATE_PHONE_ING':
        case 'UPDATE_PHONE_PENDING':
        case 'UPDATE_PHONE_USED':
        case 'UPDATE_PHONE_FAILED':
        case 'VERIFY_PHONE_ING':
        case 'VERIFY_PHONE_SUCCESS':
        case 'VERIFY_PHONE_FAILED':
            return action.type
        default:
            return state
    }
}

export default phone
