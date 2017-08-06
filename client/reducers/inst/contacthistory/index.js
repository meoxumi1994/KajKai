import { combineReducers } from 'redux'

import managercomment from './managercomment'

const index = (state = {
    
}, action) => {
    switch (action.type) {
        case 'INST_CONTACT_HISTORY_CHANGE':
            return {...state,
                [action.key] : action.value
            }
        default:
            return state
    }
}



const contacthistory = combineReducers({
    index,
    managercomment,
})

export default contacthistory
