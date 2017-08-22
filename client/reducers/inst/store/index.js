import { combineReducers } from 'redux'

import page from './page'
import photo from './photo'
import statistic from './statistic'
import { updateFollows } from '~/reducers/support'

const index = (state = {

}, action) => {
    switch (action.type) {
        case 'STORE_GET_ING':
            return {}
        case 'STORE_GET_SUCCESS':
            return {
                ...action.store,
            }
        case 'UPDATE_STORE_SUCCESS':
            if(state.id == action.store.id)
                return {...state, ...action.store}
            return state
        case 'client/FOLLOW':
            if(action.data.type=='store'){
                const userid = action.data.userid
                return {...state,
                    numfollow: (state.numfollow?state.numfollow:0) + (action.data.status=='add'?1:-1),
                    follows: updateFollows(state.follows, userid)
                }
            }
        return state
        default:
            return state
    }
}

const store = combineReducers({
    index,
    page,
    photo,
    statistic,
})

export default store
