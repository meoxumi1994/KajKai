const target = ( state = 'WAIT', action ) => {
    switch (action.type) {
        case 'TARGET_GET_ING':
        case 'TARGET_GET_FAILED':
        case 'TARGET_GET_SUCCESS':
            return action.type
        default:
            return state
    }
}

export default target
