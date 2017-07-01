import { combineReducers } from 'redux'
import singleChat from './singleChat'
import multiChat from './multiChat'

const center = combineReducers({
    singleChat,
    multiChat,
})

export default center
