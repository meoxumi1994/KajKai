const phone = (state = {
    statePhone : 'WAIT',
    code: '',
    timewait: 0,
}, action) => {
    switch (action.type) {
        case 'UPDATE_PHONE_ING':
            return {...state, statePhone: action.type, code: '' }
        case 'UPDATE_PHONE_PENDING':
            return {...state, statePhone: action.type, timewait: 30 }
        case 'UPDATE_PHONE_USED':
        case 'UPDATE_PHONE_FAILED':
        case 'VERIFY_PHONE_ING':
        case 'VERIFY_PHONE_SUCCESS':
        case 'VERIFY_PHONE_FAILED':
            return {...state, statePhone: action.type }
        case 'ENTITY_PHONE_VERITY_PHONE':
            return {...state, timewait: action.timewait }
        case 'INST_ENTITY_PHONE_ON_CHANGE_CODE':
            return {...state, code: action.value }
        default:
            return state
    }
}

export default phone
