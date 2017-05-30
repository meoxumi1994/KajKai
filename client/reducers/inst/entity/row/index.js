import { combineReducers } from 'redux'

import mainpostrow from './mainpostrow'
import comment from './comment'

const row = combineReducers({
    mainpostrow,
    comment,
})

export default row
