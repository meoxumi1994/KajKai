const leadercomment = (state = {

}, action) => {
    switch (action.type) {
        case 'client/COMMENT':
            return {...state,
                [action.data.leadercommentid]: {
                    ...state[action.data.leadercommentid],
                    numcomment: state[action.data.leadercommentid].numcomment + 1,
                    comments: [...state[action.data.leadercommentid].comments,
                        {
                            id: action.data.id,
                            commenterid: action.data.commenterid
                        }
                    ]
                }
            }
        case 'client/LEADERCOMMENT':
            return {...state,
                [action.data.id]: {
                    ...action.data,
                    contentedit : '',
                    isReply: false,
                    comments: [action.data],
                }
            }
        case 'GET_MORE_COMMENT_SUCCESS':
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    comments : [
                        state[action.id].comments[0],
                        ...action.comments,
                        ...state[action.id].comments.slice(1,state[action.id].comments.length),
                    ]
                }
            }
        case 'GET_MORE_LEADERCOMMENT_SUCCESS':
            let mystate = state
            action.leadercomments.map((item) => {
                mystate = {...mystate,
                    [item.comments[0].id] : {
                        ...item,
                        contentedit : '',
                        isReply: false,
                    }
                }
            })
            return mystate
        case 'GET_SELL_POST_SUCCESS':
            let mstate = state
            action.sellpost.leadercomments.map((item) => {
                mstate = {...mstate,
                    [item.comments[0].id] : {
                        ...item,
                        contentedit : '',
                        isReply: false,
                    }
                }
            })
            return mstate
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((sp) => {
                sp.leadercomments.map((item) => {
                    newstate = {...newstate,
                        [item.comments[0].id] : {
                            ...item,
                            contentedit : '',
                            isReply: false,
                        }
                    }
                })
            })
            return newstate
        case 'INST_ENTITY_LEADERCOMMENT_CHANGE':
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    [action.key] : action.value,
                }
            }
        default:
            return state
    }
}
export default leadercomment
