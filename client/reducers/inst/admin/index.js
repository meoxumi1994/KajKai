import { combineReducers } from 'redux'
import user from './user'
import dashboard from './dashboard'
import auth from './auth/'

const admin = combineReducers({
    dashboard,
    user,
    auth
})

export default admin
