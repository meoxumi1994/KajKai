const phoneinfo = (state = {
    code: '',
    modalphone: false,
    newvalue: undefined,
}, action) => {
    switch (action.type) {
        case 'PROFILE_MIDDLE_CLOSE_PHONEMODAL':
            return {...state, modalphone: false }
        case 'UPDATE_PHONE_PENDING':
        case 'UPDATE_PHONE_FAILED':
        case 'UPDATE_PHONE_USED':
            return {...state, modalphone: true }
        case 'PROFILE_MIDDLE_PHONEINFO_HANDLE_CHANGE':
            return {...state, code: action.value }
        case 'UPDATE_PHONE_ING':
            return {...state, newvalue: action.newvalue }
        default:
            return state
    }
}

export default phoneinfo
