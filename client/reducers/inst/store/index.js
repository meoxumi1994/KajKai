import { combineReducers } from 'redux'

import page from './page'
import photo from './photo'
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
                const id = action.data.id
                return {...state,
                    numfollow: (state.numlike?state.numlike:0) + (action.data.status=='add'?1:-1),
                    follows: updateFollows(state.follows, id)
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
})

export default store
