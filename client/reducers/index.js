import { combineReducers } from 'redux'

import auth from './sync/auth'
import updateuser from './sync/updateuser'
import user from './data/user'
import middle from './instance/profile/middle/index.js'

const app = combineReducers({
    auth,
    user,
    updateuser,
    middle,
})

export default app
