import { combineReducers } from 'redux'

import uploadimage from './uploadimage'
import feedback from './feedback'

const modal = combineReducers({
    uploadimage,
    feedback
})

export default modal
