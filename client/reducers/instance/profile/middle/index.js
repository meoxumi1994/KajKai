const middle = (state = {
    open : []
}, action) => {
    switch (action.type) {
        case 'PROFILE_MIDDLE_EDIT':
            return { ...state, open:  action.open }
        case 'PROFILE_MIDDLE_CANCEL':
        case 'UPDATE_USER_FAILED':
        case 'UPDATE_USER_SUCCESS':
            return { ...state, open: [] }
        default:
            return state;
    }
}

export default middle
