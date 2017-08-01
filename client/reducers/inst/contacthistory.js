const contacthistory = (state = {
    currentAvatar: '',
    currentName: '',
    currentType: 'Received',
}, action) => {
    switch (action.type) {
        case 'INST_CONTACT_HISTORY_CHANGE':
            return {...state,
                [action.key] : action.value
            }
        case 'WHO_SUCCESS':
            return {...state,
                currentName: action.user.username,
                currentAvatar: action.user.avatarUrl,
            }
        default:
            return state
    }
}

export default contacthistory
