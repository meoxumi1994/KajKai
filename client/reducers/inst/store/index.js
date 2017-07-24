import { combineReducers } from 'redux'

import page from './page'
import photo from './photo'

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
