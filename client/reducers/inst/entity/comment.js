const comment = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            console.log(action.sellposts)
            let nstate = state
            // action.sellposts.leadercomments.map((item) =>
            //     item.comments.map((cm) => )
            // )
            return state
        case 'INST_ENTITY_COMMENT_CHANGE':
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    [action.key] : action.value
                }
            }
        case 'SCREEN_CLICK':
            let newstate = {}
            for(let item in state){
                newstate[item] = {
                    ...state[item],
                    clicksetting: false,
                }
            }
            return newstate
        default:
            return state
    }
}
export default comment
