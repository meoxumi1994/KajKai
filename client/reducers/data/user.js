const user = ( state = {
    imageUrl: './images/avatardefaultIcon.png',
    language: 'ENGLISH'
}, action) => {
    switch (action.type) {
        case 'WAIT':
            return {
                language: state.language,
                imageUrl: './images/avatardefaultIcon.png',
            }
        case 'WHO_SUCCESS':
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
        case 'LANGUAGE':
        case 'VERIFY_SUCCESS':
        case 'UPDATE_USER_SUCCESS':
            return { ...state, ...action.user }
        default:
            return state;
    }
}

export default user
