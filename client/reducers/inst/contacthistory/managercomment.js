const contacthistory = (state = {
    currentAvatar: '',
    currentName: '',
    currentType: 'Received',
    currentId: '',
    contact: {},
}, action) => {
    switch (action.type) {
        case 'INST_CONTACT_HISTORY_CHANGE':
            if(action.id)
                return {...state,
                    contact: {...state.contact,
                        [action.id] : {
                            ...state.contact[action.id],
                            [action.key] : action.value
                        }
                    }
                }
            return {...state,
                [action.key] : action.value
            }
        case 'WHO_SUCCESS':
        case 'LOGIN_SUCCESS':
        case 'LANGUAGE':
        case 'VERIFY_SUCCESS':
            let newcontact = {
                [action.user.id] : {
                    id: action.user.id,
                    state: 'WAIT',
                    leadercomments: [],
                    offset: -1,
                    name: action.user.username,
                    avatar: action.user.avatarUrl,
                    type: 'user',
                }
            }
            if(action.user.storeList)
                action.user.storeList.map((item) => {
                    newcontact = {
                        ...newcontact,
                        [item.id] : {
                            id: item.id,
                            state: 'WAIT',
                            leadercomments: [],
                            offset: -1,
                            name: item.storename,
                            avatar: item.avatarUrl,
                            type: 'store',
                        }
                    }
                })
            return {
                ...state,
                currentId: action.user.currentId,
                contact: newcontact
            }
        case 'UPDATE_USER_SUCCESS':
            if(action.user.currentId)
                return {
                    ...state,
                    currentId: action.user.currentId,
                }
            return state
        case 'GET_CONTACT_USER_ING':
        case 'GET_CONTACT_USER_FAILED':
        case 'GET_CONTACT_STORE_ING':
        case 'GET_CONTACT_STORE_FAILED':
            return {
                ...state,
                contact: {
                    ...state.contact,
                    [action.id] : {
                        ...state.contact[action.id],
                        state: action.type
                    }
                }
            }
        case 'GET_CONTACT_STORE_SUCCESS':
        case 'GET_CONTACT_USER_SUCCESS':
            if(state.contact[action.id])
                return {
                    ...state,
                    contact: {
                        ...state.contact,
                        [action.id] : {
                            ...state.contact[action.id],
                            state: action.type,
                            offset: action.offset,
                            leadercomments: [
                                ...action.leadercomments,
                                ...state.contact[action.id].leadercomments,
                            ]
                        }
                    }
                }
            return state
        case 'global/LEADERCOMMENT':
            for(let i in state.contact){
                if(action.data.commenterid == i && action.data.type == 'user' && state.contact[i].state != 'WAIT'){
                    return {
                        ...state,
                        contact: {
                            ...state.contact,
                            [i] : {
                                ...state.contact[i],
                                leadercomments: [
                                    ...state.contact[i].leadercomments,
                                    {
                                        id: action.data.id,
                                    }
                                ]
                            }
                        }
                    }
                }
                if(i == action.data.storeid && action.data.commenterid != i && state.contact[i].state != 'WAIT'){
                    return {
                        ...state,
                        contact: {
                            ...state.contact,
                            [i] : {
                                ...state.contact[i],
                                leadercomments: [
                                    ...state.contact[i].leadercomments,
                                    {
                                        id: action.data.id,
                                    }
                                ]
                            }
                        }
                    }
                }
            }
            return state
        default:
            return state
    }
}

export default contacthistory
