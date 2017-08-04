import { combineReducers } from 'redux'

import modal from './modal'
import input from './input'
import row from './row'
import group from './group'
import minorpost from './minorpost'
import sellpost from './sellpost'
import editminorpost from './editminorpost'
import editsellpost from './editsellpost'
import editpostrow from './editpostrow'
import callcomment from './callcomment'
import comment from './comment'
import leadercomment from './leadercomment'
import groupcomment from './groupcomment'
import postrow from './postrow'
import product from './product'
import editproduct from './editproduct'
import phone from './phone'
import thumnail from './thumnail'
import notification from './notification'
import groupnotification from './groupnotification'
import post from './post'
import contact from './contact'
import popup from './popup'

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
    editproduct,
    editminorpost,
    editsellpost,
    editpostrow,
    thumnail,
    comment,
    groupcomment,
    leadercomment,
    notification,
    groupnotification,
    post,
    contact,
    popup
})

export default entity
