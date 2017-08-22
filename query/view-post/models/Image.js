import mongoose from '../datasource'
import _ from 'lodash'
import { ImageType } from '../enum'

const ImageSchema = new mongoose.Schema({
    url: {type: String},
    time: {type: Date},
    storeId: {type: String},
    postrowId: {type: String},
    type: {type: String, enum: _.values(ImageType)}
})

export default ImageSchema
