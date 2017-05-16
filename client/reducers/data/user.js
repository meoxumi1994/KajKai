const user = ( state = {
    avatarUrl: './images/avatardefaultIcon.png',
    coverUrl: './images/cover.png',
    language: 'ENGLISH',
    storeList: [],
}, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                avatarUrl: './images/avatardefaultIcon.png',
                coverUrl: './images/cover.png',
                language: state.language,
                storeList: [],
            }
        case 'WHO_SUCCESS':
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
        case 'LANGUAGE':
        case 'VERIFY_SUCCESS':
        case 'UPDATE_USER_SUCCESS':
            return { ...state, ...action.user }
        case 'REGISTER_STORE_SUCCESS':
            const newstoreList = [ ...state.storeList, action.user.store ]
            return { ...state, storeList: newstoreList }
        default:
            return state;
    }
}

export default user
