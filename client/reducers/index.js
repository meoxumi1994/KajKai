import { combineReducers } from 'redux'

import login from './login'
import language from './language'

const app = combineReducers({
  login,
  language,
})

export default app
