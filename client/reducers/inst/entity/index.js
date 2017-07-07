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
// import phone from './phone'

const phone = (state = 'WAIT', action) => {
    console.log(action)
    switch (action.type) {
        case 'UPDATE_PHONE_ING':
        case 'UPDATE_PHONE_PENDING':
        case 'UPDATE_PHONE_USED':
        case 'UPDATE_PHONE_FAILED':
        case 'VERIFY_PHONE_ING':
        case 'VERIFY_PHONE_SUCCESS':
        case 'VERIFY_PHONE_FAILED':
            return action.type
        default:
            return state
    }
}

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
})

export default entity
