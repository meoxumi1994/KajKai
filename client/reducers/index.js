import { combineReducers } from 'redux'

import login from './login'

const app = combineReducers({
  login
})


// const app = (state = { who: 'ANONYMOUS' }, action) => {
//   switch (action.type) {
//     case 'LOGGING_IN':
//     case 'LOG_IN_SUCCESS':
//     case 'LOG_IN_FAILURE':
//     case 'NOT_LOGGED_IN':
//       return action
//     default:
//       return state
//   }
// }

export default app
