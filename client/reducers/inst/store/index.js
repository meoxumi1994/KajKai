import { combineReducers } from 'redux'

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
    index
})

export default store
