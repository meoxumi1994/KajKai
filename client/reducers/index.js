import { combineReducers } from 'redux'

import auth from './sync/auth'
import updateuser from './sync/updateuser'
import target from './sync/target'
import user from './data/user'
import middle from './inst/profile/middle/index.js'
import inst from './inst'


const app = combineReducers({
    auth,
    user,
    updateuser,
    inst,
    target,
})

export default app
