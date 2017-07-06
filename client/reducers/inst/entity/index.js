import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'
import group from './group'
import minorpost from './minorpost'
import sellpost from './sellpost'
import editsellpost from './editsellpost'
import callcomment from './callcomment'
import postrow from './postrow'
import product from './product'

const entity = combineReducers({
    modal,
    input,
    row,
    group,
    minorpost,
    sellpost,
    callcomment,
    postrow,
    product,
})

export default entity
