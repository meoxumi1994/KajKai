const rowsecurity = (state = {
    oldpassword : '',
    newpassword :'',
    repassword: '',
}, action) => {
    switch (action.type) {
        case 'PROFILE_MIDDLE_ROWSECIRITY_HANDLE_CHANGE':
            return { ...state, ...action.value }
        default:
            return state
    }
}
export default rowsecurity
