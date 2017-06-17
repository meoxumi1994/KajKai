import { combineReducers } from 'redux'

import userloginregister from './user-login-register'
import profile from './profile'
import registerstore from './register-store'
import target from './target'
import entity from './entity'
import chat from './chat'
import app from './app'


const inst = combineReducers({
    userloginregister,
    profile,
    registerstore,
    target,
    entity,
    chat,
    app,
})

export default inst
