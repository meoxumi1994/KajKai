const product = (state = {
}, action) => {
    switch (action.type) {
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((item) => {
                item.postrows.map((pr) => {
                    if(pr.type=='product' || pr.type=='groupproduct'){
                        pr.products.map((pro) => {
                            newstate = {
                                ...newstate,
                                [pro.id] : pro
                            }
                        })
                    }
                })
            })
            return newstate
        case 'INST_ENTITY_PRODUCT_CHANGE':
            return {...state, [action.id]: {
                ...state[action.id],
                [action.key] : action.value
            }}
        default:
            return state
    }
}

export default product
