const auth = ( state = 'WAIT' , action) => {
    switch (action.type) {
        case 'WAIT':
        case 'WHO_ING':
        case 'WHO_SUCCESS':
        case 'WHO_FAILED':
        case 'LOGIN_ING':
        case 'LOGIN_FAILED':
        case 'LOGIN_SUCCESS':
        case 'REGISTER_ING':
        case 'REGISTER_FAILED':
        case 'REGISTER_ALREADY_OPEN':
        case 'REGISTER_ALREADY_CLOSE':
        case 'REGISTER_SUCCESS':
        case 'REGISTER_STORE_ING':
        case 'REGISTER_STORE_FAILED':
        case 'REGISTER_STORE_SUCCESS':
            return action.type
        default:
            return state
    }
}

export default auth
