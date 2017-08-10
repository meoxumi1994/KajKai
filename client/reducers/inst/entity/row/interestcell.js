const interestcell = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SUB_INTEREST_SUCCESS':
            let newstate = state
            action.interests.map((item) => {
                newstate = {
                    ...newstate,
                    [item.id] : item
                }
            })
            return newstate
        case 'CREATE_SUB_INTEREST_SUCCESS':
            return {
                ...state,
                [action.interest.id] : action.interest
            }
        case 'REMOVE_INTEREST_SUCCESS':
            return {
                ...state,
                [action.id]: undefined,
            }
        default:
            return state
    }
}
export default interestcell
