const rowinfo = (state = {
    newvalue: '',
}, action) => {
    switch (action.type) {
        case 'PROFILE_MIDDLE_EDIT':
            return { ...state, newvalue: action.newvalue }
        case 'PROFILE_MIDDLE_ROWINFO_HANDLE_CHANGE':
            return { ...state, newvalue: action.newvalue }
        default:
            return state
    }
}
export default rowinfo
