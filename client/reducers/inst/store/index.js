import { combineReducers } from 'redux'

import page from './page'

const index = (state = {

}, action) => {
    switch (action.type) {
        case 'STORE_GET_ING':
            return {}
        case 'STORE_GET_SUCCESS':
            return action.store
        default:
            return state
    }
}

const store = combineReducers({
    index,
    page,
})

export default store
