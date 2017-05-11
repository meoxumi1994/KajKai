const middle = (state = {
    open : [],
    modalphone: false,
    modalpassword: false,
}, action) => {
    switch (action.type) {
        case 'PROFILE_MIDDLE_EDIT':
            return { ...state, open: action.open }
        case 'PROFILE_MIDDLE_CANCEL':
        case 'UPDATE_USER_FAILED':
        case 'UPDATE_USER_SUCCESS':
            return { ...state, open: [] }
        case 'PROFILE_MIDDLE_CLOSE_PHONEMODAL':
            return {...state, modalphone: false }
        case 'PROFILE_MIDDLE_CLOSE_PASSWORDMODAL':
            return {...state, modalpassword: false }
        case 'UPDATE_PASSWORD_SUCCESS':
        case 'UPDATE_PASSWORD_FAILED':
        case 'PROFILE_MIDDLE_OPEN_PASSWORDMODAL':
            return {...state, modalpassword: true }
        case 'UPDATE_PHONE_ING':
            return {...state, newvalue: action.newvalue }
        case 'UPDATE_PHONE_PENDING':
        case 'UPDATE_PHONE_FAILED':
        case 'UPDATE_PHONE_USED':
            return {...state, modalphone: true }
        default:
            return state;
    }
}

export default middle
