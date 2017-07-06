const postrow = (state = {
}, action) => {
    switch (action.type) {
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((item) => {
                item.postrows.map((pr) => {
                    newstate = {
                        ...newstate,
                        [pr.id] : pr,
                    }
                })
            })
            return newstate
        default:
            return state
    }
}
export default postrow
