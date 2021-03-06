const leadercomment = (state = {

}, action) => {
    switch (action.type) {
        case 'global/DONE':
            console.log(action)
            if(state[action.data.leadercommentid] && action.data.status == 'success')
                return {...state,
                    [action.data.leadercommentid]: {
                        ...state[action.data.leadercommentid],
                        status: 'done',
                        isRead: true,
                    }
                }
            return state
        case 'global/COMMENT':
            if(state[action.data.leadercommentid])
                return {...state,
                    [action.data.leadercommentid]: {
                        ...state[action.data.leadercommentid],
                        numcomment: state[action.data.leadercommentid].numcomment + 1,
                        comments: [...state[action.data.leadercommentid].comments,
                            {
                                ...action.data
                            }
                        ]
                    }
                }
            return state
        case 'global/LEADERCOMMENT':
            return {...state,
                [action.data.id]: {
                    ...action.data,
                    contentedit : '',
                    isReply: false,
                    comments: [action.data],
                }
            }
        case 'GET_MORE_COMMENT_SUCCESS':
            if(!state[action.id] || !state[action.id].comments) return state
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    offset: action.offset,
                    comments : [
                        state[action.id].comments[0],
                        ...action.comments,
                        ...state[action.id].comments.slice(1,state[action.id].comments.length),
                    ]
                }
            }
        case 'GET_CONTACT_STORE_SUCCESS':
        case 'GET_CONTACT_USER_SUCCESS':
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
