const login = (state = {
    isclick: false,
    loginid : '',
    password : '',
}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REGISTER_LOGIN_CLICK_LOGIN_BUTTON':
            return {...state, isclick: true }
        case 'USER_LOGIN_REGISTER_LOGIN_INPUT_CHANGE':
            return {...state, ...action.value }
        default:
            return state
    }
}

export default login
