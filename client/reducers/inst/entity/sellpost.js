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
                [action.sellpost.id] : action.sellpost,
            }
        case 'INST_ENTITY_SELL_POST_CHANGE':
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    [action.key] : action.value,
                }
            }
        case 'SCREEN_CLICK':
            let nstate = {}
            for(let item in state){
                nstate = {...nstate,
                    [item] : {
                        ...state[item],
                        clicksetting : false,
                    }
                }
            }
            return nstate
        default:
            return state
    }
}
export default sellpost
