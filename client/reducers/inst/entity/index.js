import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'

const entity = combineReducers({
    modal,
    input,
})

export default entity
