import { combineReducers } from 'redux'

import left from './left/'
import center from './center/'
import display from './display/'
import buttom from './buttom/'

const chat = combineReducers({
    left,
    center,
    display,
    buttom
})

export default chat
