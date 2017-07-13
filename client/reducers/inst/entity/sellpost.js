const sellpost = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((item) => {
                newstate = {
                    ...newstate,
                    [item.id] : item,
                }
            })
            return newstate
        case 'CREATE_SELL_POST_SUCCESS':
            return {
                ...state,
                [action.sellpost.id] : action.sellpost.id,
            }
        default:
            return state
    }
}
export default sellpost
