import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'
import group from './group'

const entity = combineReducers({
    modal,
    input,
    row,
    group,
})

export default entity
