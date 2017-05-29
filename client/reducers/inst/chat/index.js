import { combineReducers } from 'redux'

import left from './left'
import center from './center'
import visibility from './visibility'

const chat = combineReducers({
    left,
    center,
    visibility
})

export default chat
