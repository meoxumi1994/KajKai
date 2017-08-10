import { combineReducers } from 'redux'

import uploadimage from './uploadimage'
import feedback from './feedback'
import productmodal from './productmodal'
import createinterest from './createinterest'

const modal = combineReducers({
    uploadimage,
    feedback,
    productmodal,
    createinterest
})

export default modal
