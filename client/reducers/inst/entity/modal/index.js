import { combineReducers } from 'redux'

import uploadimage from './uploadimage'
import feedback from './feedback'
import productmodal from './productmodal'

const modal = combineReducers({
    uploadimage,
    feedback,
    productmodal
})

export default modal
