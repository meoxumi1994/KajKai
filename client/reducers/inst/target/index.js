import { combineReducers } from 'redux'

const index = (state = {
}, action) => {
    switch (action.type) {
        case 'TARGET_GET_ING':
            return {}
        case 'TARGET_GET_SUCCESS':
            return action.target
        default:
            return state
    }
}

const target = combineReducers({
    index,
})

export default target
