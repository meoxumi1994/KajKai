import { combineReducers } from 'redux'

import left from './left'
import center from './center'

const chat = combineReducers({
    left,
    center
})

export default chat
