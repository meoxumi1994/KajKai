const newfeed = (state = {
    type: 'WAIT',
    kind: 'category',
    sellPosts: [],
    stores: [],
    users: [],
}, action) => {
    switch (action.type) {
        case 'INST_HOME_NEWFEED_CHANGE':
            return {
                ...state,
                [action.key] : action.value
            }
        case 'SEARCH_SUCCESS':
            if(action.kind == 'user')
                return {
                    ...state,
                    ...action,
                    users: [
                        ...state.users,
                        ...action.users
                    ]
                }
            if(action.kind == 'store'){
                return {
                    ...state,
                    ...action,
                    stores: [
                        ...state.stores,
                        ...action.stores
                    ]
                }
            }
            if(action.kind == 'category'){
                return {
                    ...state,
                    ...action,
                    sellPosts: [
                        ...state.sellPosts,
                        ...action.sellPosts
                    ]
                }
            }
            return state
        case 'SEARCH_ING':
            return {
                ...state,
                type: 'SEARCH_ING'
            }
        default:
            return state
    }
}

export default newfeed
