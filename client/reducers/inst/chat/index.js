import { combineReducers } from 'redux'

import left from './left'
import center from './center'
import visibility from './visibility'
import buttom from './buttom'

const chat = combineReducers({
    left,
    center,
    visibility,
    buttom
})

export default chat
