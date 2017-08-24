import { combineReducers } from 'redux'

import interest from './interest'
import photo from './photo'

const index = (state = {
    stateUser : 'WAIT',
    coverUrl: '/images/coverDefault.png',
}, action) => {
    switch (action.type) {
        case 'USER_GET_ING':
            return {
                stateUser: action.type,
                coverUrl: '/images/coverDefault.png',
            }
        case 'USER_GET_SUCCESS':
            return {
                coverUrl: '/images/coverDefault.png',
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
    photo,
})

export default user
