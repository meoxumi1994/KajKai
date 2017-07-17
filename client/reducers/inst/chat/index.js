import { combineReducers } from 'redux'

import left from './left/'
import center from './center/'
import buttom from './buttom/'
import search from './search/'

const chat = combineReducers({
    left,
    center,
    buttom,
    search,
})

export default chat
