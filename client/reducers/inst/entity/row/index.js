import { combineReducers } from 'redux'

import postrow from './postrow'
import comment from './comment'
import settingcell from './settingcell'
import interestcell from './interestcell'

const row = combineReducers({
    postrow,
    comment,
    settingcell,
    interestcell
})

export default row
