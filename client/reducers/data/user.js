const user = ( state = {
    language: 'en',
    storeList: [],
}, action) => {
    switch (action.type) {
        case 'WHO_FAILED':
        case 'LOGOUT':
            return {
                language: state.language,
                storeList: [],
            }
        case 'UN_BLOCK_USER_SUCCESS':
            let newstate = state
            state.blocks.map((item, index) => {
                if(item.id == action.id){
                    newstate = {
                        ...state,
                        blocks: [
                            ...state.blocks.slice(0,index),
                            ...state.blocks.slice(index+1,state.blocks.length)
                        ],
                    }
                }
            })
            return newstate
        case 'WHO_SUCCESS':
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
        case 'LANGUAGE':
        case 'VERIFY_SUCCESS':
        case 'UPDATE_USER_SUCCESS':
            return { ...state, ...action.user }
        // case 'REGISTER_STORE_SUCCESS':
        //     const newstoreList = [ ...state.storeList, action.user.store ]
        //     return { ...state, storeList: newstoreList }
        default:
            return state;
    }
}

export default user
