import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'

const entity = combineReducers({
    modal,
    input,
    row,
})

export default entity
