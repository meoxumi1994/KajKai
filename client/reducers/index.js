import { combineReducers } from 'redux'

import auth from './sync/auth'
import updateuser from './sync/updateuser'
import user from './data/user'
import middle from './inst/profile/middle/index.js'
import inst from './inst'

const app = combineReducers({
    auth,
    user,
    updateuser,
    inst,
})

export default app
