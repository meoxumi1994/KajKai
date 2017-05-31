import { combineReducers } from 'redux'

import comments from './comments'
import groupcomments from './groupcomments'

const group = combineReducers({
    comments,
    groupcomments,
})

export default group
