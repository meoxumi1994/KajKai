import { combineReducers } from 'redux'

import login from './login'
import register from './register'
import verify from './verify'
import forgotpassword from './forgotpassword'

const userloginregiseter = combineReducers({
    login,
    register,
    verify,
    forgotpassword
})

export default userloginregiseter
