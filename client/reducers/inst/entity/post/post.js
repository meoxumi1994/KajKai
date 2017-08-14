const post = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SELL_POST_SUCCESS':
            const sellpost = action.sellpost
            return{
                ...state,
                [sellpost.id] : sellpost
            }
        default:
            return state
    }
}

export default post
