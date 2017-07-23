const groupcomment = (state = {

}, action) => {
    switch (action.type) {
        case 'CREATE_SELL_POST_SUCCESS':
            console.log(action)
            return {
                ...state,
                [action.sellpost.id] : action.sellpost,
            }
        case 'client/LEADERCOMMENT':
            return {...state,
                [action.data.sellpostid]: {
                    ...state[action.data.sellpostid],
                    numleadercomment: state[action.data.sellpostid].numleadercomment + 1,
                    leadercomments: [...state[action.data.sellpostid].leadercomments,
                        {
                            id: action.data.id,
                        }
                    ]
                }
            }
        case 'GET_MORE_LEADERCOMMENT_SUCCESS':
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    offset: action.offset,
                    leadercomments: [
                        ...action.leadercomments,
                        ...state[action.id].leadercomments,
                    ]
                }
            }
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((sp) => {
                newstate = {...newstate,
                    [sp.id] : {
                        id: sp.id,
                        offset: sp.offset,
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
