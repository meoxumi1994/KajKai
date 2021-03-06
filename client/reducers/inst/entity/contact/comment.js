import { updateLikes } from '~/reducers/support'

const comment = (state = {

}, action) => {
    switch (action.type) {
        case 'global/RECEIVE':
            if(action.data.status == 'success')
                return {...state,
                    [action.data.leadercommentid]: {
                        ...state[action.data.leadercommentid],
                        status: 'received',
                        isRead: true,
                    }
                }
            return state
        case 'global/DONE':
            if(action.data.status == 'success')
                return {...state,
                    [action.data.leadercommentid]: {
                        ...state[action.data.leadercommentid],
                        status: 'done',
                        isRead: true,
                    }
                }
            return state
        case 'global/COMMENT':
        case 'global/LEADERCOMMENT':
            return {...state,
                [action.data.id]: {
                    ...action.data,
                    isRead: true,
                }
            }
        case 'global/LIKE':
            if(action.data.type=='comment' || action.data.type=='leadercomment'){
                const id = action.data.commentid || action.data.leadercommentid
                if(!state[id]) return state
                return {...state,
                    [id] : {
                        ...state[id],
                        numlike: (state[id].numlike?state[id].numlike:0) + (action.data.status=='like'?1:-1),
                        likes: updateLikes(state[id].likes, action.data.id, action.data.name ),
                        isRead: true,
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
        case 'GET_CONTACT_STORE_SUCCESS':
        case 'GET_CONTACT_USER_SUCCESS':
        case 'GET_MORE_LEADERCOMMENT_SUCCESS':
            let mystate = state
            action.leadercomments.map((item) => {
                item.comments.map((cm) => {
                    mystate = {...mystate,
                        [cm.id] : cm
                    }
                })
            })
            console.log(action)
            return mystate
        case 'GET_SELL_POST_SUCCESS':
            let mstate = state
            action.sellpost.leadercomments.map((item) => {
                item.comments.map((cm) => {
                    mstate = {...mstate,
                        [cm.id] : cm
                    }
                })
            })
            return mstate
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
