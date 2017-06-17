const sellpost = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SELL_POSTS_SUCCESS':
            return {...state, }
        default:
            return state
    }
}
export default sellpost
