const groupinterest = (state = {
    offset: -1,
    interests: [],
}, action) => {
    switch (action.type) {
        case 'GET_SUB_INTEREST_SUCCESS':
            console.log(action)
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
        default:
            return state
    }
}
export default groupinterest
