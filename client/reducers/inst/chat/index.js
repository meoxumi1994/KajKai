import { combineReducers } from 'redux'

import left from './left/'
import center from './center/'
import buttom from './buttom/'

const chat = combineReducers({
    left,
    center,
    buttom
})

export default chat
