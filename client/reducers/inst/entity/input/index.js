import { combineReducers } from 'redux'

import commentinput from './commentinput'
import basicinput from './basicinput'

const input = combineReducers({
    basicinput,
    commentinput,
})

export default input
