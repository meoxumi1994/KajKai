import { combineReducers } from 'redux'

import comment from './comment'
import leadercomment from './leadercomment'

const index = combineReducers({
    comment,
    leadercomment
})

export default index
