const contacthistory = (state = {
    currentAvatar: '',
    currentName: '',
    currentType: 'Received',
    currentId: '',
    offset: {},
    useroffset: -1,
}, action) => {
    switch (action.type) {
        case 'INST_CONTACT_HISTORY_CHANGE':
            return {...state,
                [action.key] : action.value
            }
        case 'WHO_SUCCESS':
            let newoffset = {}
            if(action.user.storeList)
                action.user.storeList.map((item) => {
                    newoffset = {
                        ...newoffset,
                        [item.id] : -1,
                    }
                })
            return {...state,
                currentName: action.user.username,
                currentAvatar: action.user.avatarUrl,
                offset: newoffset
            }
        default:
            return state
    }
}

export default contacthistory
