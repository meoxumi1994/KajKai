import { updateLikes } from '~/reducers/support'

const sellpost = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_SELL_POST_SUCCESS':
            return {...state,
                [action.data.sellpost.id] : {
                    ...action.data.sellpost
                }
            }
        case 'GET_SELLPOST_FROM_STORE_SUCCESS':
            let newstate = state
            action.sellposts.map((item) => {
                newstate = {
                    ...newstate,
                    [item.id] : item,
                }
            })
            return newstate
        case 'client/LIKE':
            if(action.data.type=='sellpost'){
                const id = action.data.sellpostid
                return {...state,
                    [id] : {
                        ...state[id],
                        numlike: (state[id].numlike?state[id].numlike:0) + (action.data.status=='like'?1:-1),
                        likes: updateLikes(state[id].likes, action.data.userId, action.data.userName )
                    }
                }
            }
            return state
        case 'CREATE_SELL_POST_SUCCESS':
            return {
                ...state,
                [action.sellpost.id] : action.sellpost,
            }
        case 'INST_ENTITY_SELL_POST_CHANGE':
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    [action.key] : action.value,
                }
            }
        case 'SCREEN_CLICK':
            let nstate = {}
            for(let item in state){
                nstate = {...nstate,
                    [item] : {
                        ...state[item],
                        clicksetting : false,
                    }
                }
            }
            return nstate
        default:
            return state
    }
}
export default sellpost
