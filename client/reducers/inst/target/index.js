import { combineReducers } from 'redux'

import middle from './middle'

const index = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_STORE_SELL_POST_SUCCESS':
            if(state.storeid == action.storeid)
                return {...state,
                    offset_sellpost: action.offset,
                    sellposts: [...state.sellposts, ...action.sellposts]
                }
            return {...state}
        case 'GET_STORE_MINOR_POST_SUCCESS':
            if(state.storeid == action.storeid)
                return {...state,
                    offset_minorpost: action.offset,
                    minorposts: [...state.minorposts, ...action.minorposts]
                }
            return {...state}
        case 'TARGET_GET_ING':
            return {}
        case 'TARGET_GET_SUCCESS':
            console.log(action)
            return {...action.target,
                offset_sellpost: -1,
                offset_minorpost: -1,
                sellposts: [],
                minorposts: [],
            }
        default:
            return state
    }
}

const target = combineReducers({
    index,
    middle,
})

export default target
