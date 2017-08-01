import { combineReducers } from 'redux'

import interest from './interest'

const index = (state = {
    stateUser : 'WAIT'
}, action) => {
    switch (action.type) {
        case 'USER_GET_ING':
            return {
                stateUser: action.type,
            }
        case 'USER_GET_SUCCESS':
            return {
                ...action.user,
                stateUser: action.type,
            }
        case 'UPDATE_USER_SUCCESS':
            if(state.id == action.user.id)
                return {...state, ...action.user, stateUser: action.type, }
            return {...state, stateUser: action.type, }
        default:
            return state
    }
}

const user = combineReducers({
    index,
    interest,
})

export default user
