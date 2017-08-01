const interest = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_INTEREST_ING':
            return {}
        case 'GET_INTEREST_SUCCESS':
            return {
                data: action.data
            }
        default:
            return state
    }
}
export default interest
