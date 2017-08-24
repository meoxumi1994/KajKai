const groupinterest = (state = {
    offset: -1,
    interests: [],
}, action) => {
    switch (action.type) {
        case 'GET_SUB_INTEREST_SUCCESS':
            return {
                ...state,
                offset: action.offset,
                interests: [
                    ...state.interests,
                    ...action.interests
                ]
            }
        case 'CREATE_SUB_INTEREST_SUCCESS':
            return {
                ...state,
                offset: (state.offset == -1)? action.interest.time : state.offset,
                interests: [
                    { ...action.interest },
                    ...state.interests,
                ]
            }
        case 'REMOVE_INTEREST_SUCCESS':
            let newinterests = state.interests
            state.interests.map((item,index) => {
                if(item.id == action.id){
                    newinterests = [
                        ...state.interests.slice(0, index),
                        ...state.interests.slice(index+1, state.interests.length)
                    ]
                }
            })
            return {
                ...state,
                interests: newinterests
            }
        default:
            return state
    }
}
export default groupinterest
