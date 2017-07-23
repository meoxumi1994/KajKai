import { combineReducers } from 'redux'

import addphoto from './addphoto'
import carousel from './carousel'
import choosecroppie from './choosecroppie'
import displayimage from './displayimage'
import croppie from './croppie'
import enlarge from './enlarge'
import fullscreen from './fullscreen'
import groupimage from './groupimage'
import keepimage from './keepimage'
import magic from './magic'
import oneimage from './oneimage'
import progress from './progress'
import uploadcroppie from './uploadcroppie'
import webcamcapture from './webcamcapture'

const index = combineReducers({
    addphoto,
    carousel,
    choosecroppie,
    displayimage,
    croppie,
    enlarge,
    fullscreen,
    groupimage,
    keepimage,
    magic,
    oneimage,
    progress,
    uploadcroppie,
    webcamcapture,
})

export default index
