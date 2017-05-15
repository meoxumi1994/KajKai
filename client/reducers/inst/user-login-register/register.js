const register = (state = {
    isclick: false,
    username : '',
    email : '',
    password : '',
}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REGISTER_REGISTER_CLICK_REGISTER_BUTTON':
            return {...state, isclick: true }
        case 'USER_LOGIN_REGISTER_REGISTER_INPUT_CHANGE':
            return {...state, ...action.value }
        default:
            return state
    }
}

export default register
