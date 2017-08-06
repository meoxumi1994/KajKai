import { combineReducers } from 'redux'

import postrow from './postrow'
import comment from './comment'
import settingcell from './settingcell'

const row = combineReducers({
    postrow,
    comment,
    settingcell
})

export default row
