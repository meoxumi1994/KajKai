import { combineReducers } from 'redux'

import post from './post'
import introducestore from './introducestore'

const index = combineReducers({
    post,
    introducestore,
})

export default index
