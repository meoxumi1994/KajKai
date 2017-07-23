import { combineReducers } from 'redux'
import user from './user'
import dashboard from './dashboard'

const admin = combineReducers({
    dashboard,
    user
})

export default admin
