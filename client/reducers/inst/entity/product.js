const product = (state = {
}, action) => {
    switch (action.type) {
        case 'CREATE_SELL_POST_SUCCESS':
        case 'GET_SELL_POST_SUCCESS':
        case 'EDIT_SELL_POST_SUCCESS':
            let mystate = state
            action.sellpost.postrows.map((pr) => {
                if(pr.type=='product' || pr.type=='groupproduct'){
                    pr.products.map((pro) => {
                        mystate = {
                            ...mystate,
                            [pro.id] : pro
                        }
                    })
                }
            })
            action.sellpost.leadercomments.map((lc) => {
                lc.order.map((product) => {
                    mystate = {
                        ...mystate,
                        [product.id] : product,
                    }
                })
            })
            return mystate
        case 'GET_MORE_LEADERCOMMENT_SUCCESS':
            let usstate = state
            action.leadercomments.map((lc) => {
                lc.order.map((product) => {
                    usstate = {
                        ...usstate,
                        [product.id] : product,
                    }
                })
            })
            return usstate
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
            action.sellposts.map((sellpost) => {
                sellpost.leadercomments.map((lc) => {
                    lc.order.map((product) => {
                        newstate = {
                            ...newstate,
                            [product.id] : product,
                        }
                    })
                })
            })
            return newstate
        // case 'INST_ENTITY_PRODUCT_CHANGE':
        //     return {...state, [action.id]: {
        //         ...state[action.id],
        //         [action.key] : action.value
        //     }}
        // case 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW':
        //     return {...state, [action.time]: {
        //         list: [''],
        //         imageUrl: '',
        //         content: '',
        //     }}
        // case 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_PRODUCT':
        //     return {...state, [action.id]: {
        //         list: [''],
        //         imageUrl: '',
        //         content: '',
        //     }}
        default:
            return state
    }
}

export default product
