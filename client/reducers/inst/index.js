import { combineReducers } from 'redux'

import userloginregister from './user-login-register'
import profile from './profile'
import registerstore from './register-store'
import store from './store'
import target from './target'
import entity from './entity'

const inst = combineReducers({
    userloginregister,
    profile,
    registerstore,
    store,
    target,
    entity,
})

export default inst
