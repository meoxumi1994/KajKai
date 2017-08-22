import { updateFollows } from '~/reducers/support'

const introducestore = (state = {

}, action) => {
    switch (action.type) {
        case 'INTRODUCE_STORE_GET_SUCCESS':
            return {...state,
                [action.store.id] : action.store
            }
        case 'client/FOLLOW':
            if(action.data.type=='store'){
                const userid = action.data.userid
                return {...state,
                    [action.data.id] : {
                        ...state[action.data.id],
                        numfollow: (state[action.data.id].numfollow?state[action.data.id].numfollow:0) + (action.data.status=='add'?1:-1),
                        follows: updateFollows(state[action.data.id].follows, userid, action.data.avatarUrl, action.data.username)
                    }
                }
            }
        return state
        default:
            return state
    }
}
export default introducestore
