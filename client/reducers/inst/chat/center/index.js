import { combineReducers } from 'redux'
import singleChat from './singleChat'
import multiChat from './multiChat'

export const currentChat = (state = {
    currentChat: ''
}, action) => {
    switch (action.type) {
      case 'SET_CURRENT_CHAT':
      case 'ADD_MULTI_CHAT':
      case 'ADD_SINGLE_CHAT':
        return {
          ...state,
          currentChat: action.data.mesId
        }

      default:
        return state
    }
}

const center = combineReducers({
    singleChat,
    multiChat,
    currentChat
})

export default center
