import { combineReducers } from 'redux'

import userloginregister from './user-login-register'
import profile from './profile'
import registerstore from './register-store'
import store from './store'

const inst = combineReducers({
    userloginregister,
    profile,
    registerstore,
    store,
})

export default inst
