const editsellpost = (state = {
    default : {
        category: '',
        description: '',
        status: '',
        ship: '',
        postrows_order: [],
        postrows: [],
    }
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
        default:
            return state
    }
}
export default editsellpost
