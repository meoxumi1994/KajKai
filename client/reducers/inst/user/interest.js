const interest = (state = {
    stateInterest: 'WAIT',
}, action) => {
    switch (action.type) {
        case 'GET_INTEREST_ING':
            return {
                ...state,
                data: undefined,
                stateInterest: action.type,
            }
        case 'GET_INTEREST_SUCCESS':
            return {
                ...state,
                data: action.data,
                stateInterest: action.type,
            }
        default:
            return state
    }
}
export default interest
