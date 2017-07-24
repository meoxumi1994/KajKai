import { combineReducers } from 'redux'

import left from './left/'
import center from './center/'
import buttom from './buttom/'
import unread from './unread'

const chat = combineReducers({
    left,
    center,
    buttom,
    unread
})

export default chat
