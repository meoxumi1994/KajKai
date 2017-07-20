const comment = (state = {

}, action) => {
    switch (action.type) {
        case 'client/COMMENT':
        case 'client/LEADERCOMMENT':
            return {...state,
                [action.data.id]: action.data
            }
        case 'client/LIKE':
            if(action.data.type=='comment' || action.data.type=='leadercomment'){
                const id = action.data.commentid || action.data.leadercommentid
                return {...state,
                    [id] : {
                        ...state[id],
                        numlike: (state[id].numlike?state[id].numlike:0) + (action.data.status=='like'?1:-1),
                    }
                }
            }
            return state
        case 'GET_MORE_COMMENT_SUCCESS':
            let cstate = state
            action.comments.map((cm) => {
                cstate = {...cstate,
                    [cm.id] : cm
                }
            })
            return cstate
        case 'GET_MORE_LEADERCOMMENT_SUCCESS':
            let mystate = state
            action.leadercomments.map((item) => {
                item.comments.map((cm) => {
                    mystate = {...mystate,
                        [cm.id] : cm
                    }
                })
            })
            return mystate
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
