import { combineReducers } from 'redux'

import left from './left'
import middle from './middle'
import right from './right'

const index = (state = {
    index: undefined,
}, action) => {
    switch (action.type) {
        case 'STORE_OPEN':
            return {...state, index: action.index }
        case 'REGISTER_STORE_SUCCESS':
            return {...state, index: action.user.newindex }
        default:
            return state
    }
}

const store = combineReducers({
    left,
    middle,
    right,
    index,
})

export default store
