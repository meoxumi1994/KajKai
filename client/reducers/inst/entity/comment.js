const comment = (state = {

}, action) => {
    switch (action.type) {
        case 'client/COMMENT':
        case 'client/LEADERCOMMENT':
            return {...state,
                [action.data.id]: action.data
            }
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let nstate = state
            action.sellposts.map((sp) => {
                sp.leadercomments.map((item) => {
                    item.comments.map((cm) => {
                        nstate = {...nstate,
                            [cm.id] : cm
                        }
                    })
                })
            })
            return nstate
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
