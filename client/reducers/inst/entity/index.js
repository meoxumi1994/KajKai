import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'
import group from './group'
import minorpost from './minorpost'
import sellpost from './sellpost'
import callcomment from './callcomment'

const entity = combineReducers({
    modal,
    input,
    row,
    group,
    minorpost,
    sellpost,
    callcomment,
})

export default entity
