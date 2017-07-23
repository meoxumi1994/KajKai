import { combineReducers } from 'redux'
import newfeed from './newfeed'

const index = (state = {

}, action) => {
    switch (action.type) {

        default:
            return state
    }
}

const home = combineReducers({
    index,
    newfeed,
})

export default home
