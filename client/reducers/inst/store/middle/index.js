import { combineReducers } from 'redux'

import mainpost from './mainpost'
import top from './top'
import info from './info'

const middle = combineReducers({
    mainpost,
    top,
    info,
})

export default middle
