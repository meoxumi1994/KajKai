const forgetpassword = (state = {
    show: false,
    currentState: 'WAIT',
    email: ''
}, action) => {
    switch (action.type) {
        case 'RESET_PASSWORD_ING':
        case 'RESET_PASSWORD_SUCCESS':
        case 'RESET_PASSWORD_FAILED':
            return {
                ...state,
                currentState: action.type
            }
        case 'INST_REGISTER_FORGOT_PASSWORD_CHANGE':
            return {
                ...state,
                [action.key] : action.value,
            }
        default:
            return state
    }
}
export default forgetpassword
