import { combineReducers } from 'redux'

import login from './login'
import register from './register'
import verify from './verify'

const userloginregiseter = combineReducers({
    login,
    register,
    verify,
})

export default userloginregiseter
