import { combineReducers } from 'redux'

import userloginregister from './user-login-register'
import profile from './profile'
import registerstore from './register-store'
import target from './target'
import entity from './entity'
import chat from './chat'
import app from './app'
import store from './store'
import map from './map'
import user from './user'
import category from './category'
import search from './search'
import admin from './admin'

const inst = combineReducers({
    userloginregister,
    profile,
    registerstore,
    target,
    store,
    entity,
    chat,
    app,
    map,
    user,
    category,
    search,
    admin
})

export default inst
