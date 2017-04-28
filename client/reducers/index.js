import { combineReducers } from 'redux'

import userlogin from './user-login-register/login'
import registerResult from './user-login-register/register'
import firstLoading from './firstLoading'
import language from './language'

const app = combineReducers({
  userlogin,
  registerResult,
  language,
  whoResult: firstLoading,
})

export default app
