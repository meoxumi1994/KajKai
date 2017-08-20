import { combineReducers } from 'redux'

import popupnotification from './popupnotification'
import popupupdate from './popupupdate'

const index = combineReducers({
    popupnotification,
    popupupdate
})

export default index
