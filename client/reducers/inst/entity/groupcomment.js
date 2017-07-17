const groupcomment = (state = {

}, action) => {
    switch (action.type) {
        case 'client/LEADERCOMMENT':
            return {...state,
                [action.data.sellpostid]: {
                    leadercomments: [...state[action.data.sellpostid].leadercomments,
                        {
                            id: action.data.id,
                        }
                    ]
                }
            }
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((sp) => {
                newstate = {...newstate,
                    [sp.id] : {
                        id: sp.id,
                        leadercomments: sp.leadercomments,
                        numleadercomment: sp.numleadercomment,
                        content: '',
                        order: [],
                    }
                }
            })
            return newstate
        case 'INST_ENTITY_GROUPCOMMENT_CHANGE':
            return {...state,
                [action.id] : {...state[action.id],
                    [action.key] : action.value,
                }
            }
        default:
            return state
    }
}
export default groupcomment
