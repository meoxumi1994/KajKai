import { combineReducers } from 'redux'

import postrow from './postrow'
import comment from './comment'

const row = combineReducers({
    postrow,
    comment,
})

export default row
