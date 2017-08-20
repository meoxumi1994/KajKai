import { combineReducers } from 'redux'

import postrow from './postrow'
import comment from './comment'
import settingcell from './settingcell'
import interestcell from './interestcell'
import useroverview from './useroverview'

const row = combineReducers({
    postrow,
    comment,
    settingcell,
    interestcell,
    useroverview
})

export default row
