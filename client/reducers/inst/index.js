import { combineReducers } from 'redux'

import userloginregister from './user-login-register'
import profile from './profile'
import registerstore from './register-store'
import store from './store'
<<<<<<< Updated upstream
import target from './target'
import entity from './entity'
=======
import chat from './chat'
>>>>>>> Stashed changes

const inst = combineReducers({
    userloginregister,
    profile,
    registerstore,
    store,
<<<<<<< Updated upstream
    target,
    entity,
=======
    chat
>>>>>>> Stashed changes
})

export default inst
