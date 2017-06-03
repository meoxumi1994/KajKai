import { combineReducers } from 'redux'

import middle from './middle'

const index = (state = {
    
}, action) => {
    switch (action.type) {
        case 'TARGET_GET_ING':
            return {}
        case 'TARGET_GET_SUCCESS':
            console.log(action)
            return action.target
        default:
            return state
    }
}

const target = combineReducers({
    index,
    middle,
})

export default target
