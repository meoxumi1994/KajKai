import { combineReducers } from 'redux'

const index = (state = {

}, action) => {
    switch (action.type) {
        case 'USER_GET_ING':
            return {}
        case 'USER_GET_SUCCESS':
            return action.user
        default:
            return state
    }
}

const user = combineReducers({
    index
})

export default user
