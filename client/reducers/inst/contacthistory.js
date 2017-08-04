const contacthistory = (state = {
    currentAvatar: '',
    currentName: '',
    currentType: 'Received',
    currentId: '',
    userState: 'WAIT',
    storeState: 'WAIT',
    leadercomments: [],
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
        case 'GET_CONTACT_USER_ING':
        case 'GET_CONTACT_USER_FAILED':
            return {
                ...state,
                userState: action.type,
            }
        case 'GET_CONTACT_USER_SUCCESS':
            return {
                ...state,
                userState: action.type,
                leadercomments: action.leadercomments,
                offset: {
                    ...state.offset,
                    [action.id] : action.offset,
                }
            }
        case 'global/LEADERCOMMENT':
            return {...state,
                leadercomments: [...state.leadercomments,
                    {
                        id: action.data.id,
                    }
                ]
            }
        case 'GET_CONTACT_STORE_ING':
        case 'GET_CONTACT_STORE_FAILED':
            return {
                ...state,
                storeState: action.type,
            }
        case 'GET_CONTACT_STORE_SUCCESS':
            return {
                ...state,
                storeState: action.type,
                leadercomments: action.leadercomments,
                useroffset: action.offset,
            }
        default:
            return state
    }
}

export default contacthistory
