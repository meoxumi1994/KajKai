import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'
import group from './group'
import minorpost from './minorpost'
import sellpost from './sellpost'
import editminorpost from './editminorpost'
import editsellpost from './editsellpost'
import editpostrow from './editpostrow'
import callcomment from './callcomment'
import comment from './comment'
import postrow from './postrow'
import product from './product'
import phone from './phone'
import thumnail from './thumnail'

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
    editminorpost,
    editsellpost,
    editpostrow,
    thumnail,
    comment,
})

export default entity
