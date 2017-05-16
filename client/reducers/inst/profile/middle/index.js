import { combineReducers } from 'redux'

import phoneinfo from './phoneinfo'
import rowinfo from './rowinfo'
import rowprivacy from './rowprivacy'
import rowsecurity from './rowsecurity'
import modaluploadavatar from './modaluploadavatar'
import modaluploadcover from './modaluploadcover'

const index = (state = {
    open : [],
    modalpassword: false,
}, action) => {
    switch (action.type) {
        case 'PROFILE_MIDDLE_EDIT':
            return { ...state, open: action.open }
        case 'PROFILE_MIDDLE_CANCEL':
        case 'UPDATE_USER_FAILED':
        case 'UPDATE_USER_SUCCESS':
            return { ...state, open: [] }
        case 'PROFILE_MIDDLE_CLOSE_PASSWORDMODAL':
            return {...state, modalpassword: false }
        case 'UPDATE_PASSWORD_SUCCESS':
        case 'UPDATE_PASSWORD_FAILED':
        case 'PROFILE_MIDDLE_OPEN_PASSWORDMODAL':
            return {...state, modalpassword: true }
        default:
            return state;
    }
}



const middle = combineReducers({
    index,
    phoneinfo,
    rowinfo,
    rowprivacy,
    rowsecurity,
    modaluploadavatar,
    modaluploadcover,
})

export default middle
