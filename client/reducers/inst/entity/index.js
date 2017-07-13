import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'
import group from './group'
import minorpost from './minorpost'
import sellpost from './sellpost'
import editsellpost from './editsellpost'
import editpostrow from './editpostrow'
import callcomment from './callcomment'
import postrow from './postrow'
import product from './product'
import phone from './phone'
import progress from './progress'

const entity = combineReducers({
    modal,
    input,
    row,
    group,
    phone,
    minorpost,
    sellpost,
    callcomment,
    postrow,
    product,
    editsellpost,
    editpostrow,
    progress,
})

export default entity
